import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Mail, Shield, Calendar, Edit3, Save, X, LogOut } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import type { User as SupabaseUser } from '@supabase/supabase-js';

interface UserProfile {
  id: string;
  user_id: string;
  display_name: string | null;
  email: string | null;
  avatar_url: string | null;
  bio: string | null;
  created_at: string;
  updated_at: string;
}

const ProfilePage = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [editForm, setEditForm] = useState({
    display_name: '',
    bio: '',
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = async () => {
      // Check current session
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/auth');
        return;
      }

      setUser(session.user);
      await fetchProfile(session.user.id);

      // Listen for auth changes
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        (event, session) => {
          if (!session) {
            navigate('/auth');
          } else {
            setUser(session.user);
            fetchProfile(session.user.id);
          }
        }
      );

      setIsLoading(false);
      return () => subscription.unsubscribe();
    };

    initializeAuth();
  }, [navigate]);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        setProfile(data);
        setEditForm({
          display_name: data.display_name || '',
          bio: data.bio || '',
        });
      }
    } catch (error: any) {
      toast({
        title: "Error fetching profile",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleSaveProfile = async () => {
    if (!user) return;

    setIsSaving(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          user_id: user.id,
          display_name: editForm.display_name,
          bio: editForm.bio,
          email: user.email,
        });

      if (error) throw error;

      await fetchProfile(user.id);
      setIsEditing(false);
      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
      });
    } catch (error: any) {
      toast({
        title: "Error updating profile",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      });
      navigate('/');
    } catch (error: any) {
      toast({
        title: "Error logging out",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader 
        title="My Profile" 
        subtitle="Manage your account settings and preferences"
      />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Profile Header */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profile?.avatar_url || ''} />
                  <AvatarFallback className="text-2xl">
                    {getInitials(profile?.display_name || user.email)}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold">
                        {profile?.display_name || 'Anonymous User'}
                      </h2>
                      <p className="text-muted-foreground flex items-center gap-2 justify-center sm:justify-start">
                        <Mail className="h-4 w-4" />
                        {user.email}
                      </p>
                      <div className="flex items-center gap-2 mt-2 justify-center sm:justify-start">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          Joined {new Date(profile?.created_at || user.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        variant={isEditing ? "outline" : "default"}
                        onClick={() => {
                          if (isEditing) {
                            setIsEditing(false);
                            setEditForm({
                              display_name: profile?.display_name || '',
                              bio: profile?.bio || '',
                            });
                          } else {
                            setIsEditing(true);
                          }
                        }}
                      >
                        {isEditing ? <X className="h-4 w-4 mr-2" /> : <Edit3 className="h-4 w-4 mr-2" />}
                        {isEditing ? 'Cancel' : 'Edit Profile'}
                      </Button>
                      
                      <Button
                        variant="outline"
                        onClick={handleLogout}
                        className="text-destructive hover:text-destructive"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="profile">Profile Details</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="display_name">Display Name</Label>
                        <Input
                          id="display_name"
                          value={editForm.display_name}
                          onChange={(e) => setEditForm(prev => ({...prev, display_name: e.target.value}))}
                          placeholder="Enter your display name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          value={editForm.bio}
                          onChange={(e) => setEditForm(prev => ({...prev, bio: e.target.value}))}
                          placeholder="Tell us about yourself..."
                          rows={4}
                        />
                      </div>

                      <Button onClick={handleSaveProfile} disabled={isSaving}>
                        <Save className="h-4 w-4 mr-2" />
                        {isSaving ? 'Saving...' : 'Save Changes'}
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Display Name</Label>
                        <p className="mt-1">{profile?.display_name || 'Not set'}</p>
                      </div>
                      
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Email</Label>
                        <p className="mt-1">{user.email}</p>
                      </div>

                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Bio</Label>
                        <p className="mt-1 text-sm">
                          {profile?.bio || 'No bio provided yet.'}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium">Email Verified</p>
                        <p className="text-sm text-muted-foreground">Your email address is verified</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Verified
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Account Type</p>
                        <p className="text-sm text-muted-foreground">Standard user account</p>
                      </div>
                    </div>
                    <Badge variant="outline">Standard</Badge>
                  </div>

                  <div className="p-4 border rounded-lg bg-muted/50">
                    <h4 className="font-medium mb-2">Security Tips</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Use a strong, unique password for your account</li>
                      <li>• Keep your email address up to date</li>
                      <li>• Log out from shared devices</li>
                      <li>• Report any suspicious activity</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfilePage;