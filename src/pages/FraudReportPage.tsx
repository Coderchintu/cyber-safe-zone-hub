import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, Shield, TrendingUp, Users } from 'lucide-react';
import { fraudReports, type FraudReport } from '@/data/fraudReportsData';
import { useToast } from '@/hooks/use-toast';

const FraudReportPage = () => {
  const { toast } = useToast();
  const [showReportForm, setShowReportForm] = useState(false);
  const [reportForm, setReportForm] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    financialLoss: '',
    platforms: '',
  });

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate report submission
    toast({
      title: "Report Submitted",
      description: "Thank you for reporting this fraud. Our team will review it shortly.",
    });
    
    // Reset form
    setReportForm({
      title: '',
      description: '',
      category: '',
      location: '',
      financialLoss: '',
      platforms: '',
    });
    setShowReportForm(false);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Verified': return 'bg-green-100 text-green-800';
      case 'False Positive': return 'bg-gray-100 text-gray-800';
      case 'Under Investigation': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Phishing': return 'bg-red-100 text-red-800';
      case 'Romance Scam': return 'bg-pink-100 text-pink-800';
      case 'Investment Fraud': return 'bg-purple-100 text-purple-800';
      case 'Tech Support Scam': return 'bg-blue-100 text-blue-800';
      case 'Online Shopping': return 'bg-green-100 text-green-800';
      case 'Cryptocurrency': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTimeAgo = (timestamp: string) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInHours = Math.floor((now.getTime() - time.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours === 1) return '1 hour ago';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    return `${Math.floor(diffInHours / 24)} days ago`;
  };

  const totalLoss = fraudReports.reduce((sum, report) => sum + (report.financialLoss || 0), 0);
  const verifiedReports = fraudReports.filter(report => report.status === 'Verified').length;
  const criticalReports = fraudReports.filter(report => report.severity === 'Critical').length;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader 
        title="Fraud Report Hub" 
        subtitle="Community-driven reporting and awareness of scams and fraudulent activities"
      />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button 
            onClick={() => setShowReportForm(!showReportForm)}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            <AlertTriangle className="h-4 w-4 mr-2" />
            Report a Scam
          </Button>
          <Button variant="outline">
            <Shield className="h-4 w-4 mr-2" />
            Safety Tips
          </Button>
        </div>

        {/* Report Form */}
        {showReportForm && (
          <Card className="mb-8 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-800">Report a New Scam or Fraud</CardTitle>
              <p className="text-muted-foreground">
                Help protect others by sharing information about scams you've encountered.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitReport} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Scam Title</label>
                    <Input
                      value={reportForm.title}
                      onChange={(e) => setReportForm({...reportForm, title: e.target.value})}
                      placeholder="Brief description of the scam"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <Select
                      value={reportForm.category}
                      onValueChange={(value) => setReportForm({...reportForm, category: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phishing">Phishing</SelectItem>
                        <SelectItem value="romance">Romance Scam</SelectItem>
                        <SelectItem value="investment">Investment Fraud</SelectItem>
                        <SelectItem value="tech-support">Tech Support Scam</SelectItem>
                        <SelectItem value="shopping">Online Shopping</SelectItem>
                        <SelectItem value="cryptocurrency">Cryptocurrency</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Textarea
                    value={reportForm.description}
                    onChange={(e) => setReportForm({...reportForm, description: e.target.value})}
                    placeholder="Detailed description of the scam, how it works, and any warning signs"
                    rows={4}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Location</label>
                    <Input
                      value={reportForm.location}
                      onChange={(e) => setReportForm({...reportForm, location: e.target.value})}
                      placeholder="Country or region"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Financial Loss (USD)</label>
                    <Input
                      value={reportForm.financialLoss}
                      onChange={(e) => setReportForm({...reportForm, financialLoss: e.target.value})}
                      placeholder="Amount lost (optional)"
                      type="number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Platforms Used</label>
                    <Input
                      value={reportForm.platforms}
                      onChange={(e) => setReportForm({...reportForm, platforms: e.target.value})}
                      placeholder="Email, WhatsApp, etc."
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="bg-red-600 hover:bg-red-700">
                    Submit Report
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowReportForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{fraudReports.length}</div>
              <p className="text-xs text-muted-foreground">Community submissions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Verified Reports</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{verifiedReports}</div>
              <p className="text-xs text-muted-foreground">Fact-checked scams</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Loss Reported</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalLoss.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Financial impact</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{criticalReports}</div>
              <p className="text-xs text-muted-foreground">High-priority threats</p>
            </CardContent>
          </Card>
        </div>

        {/* Critical Alerts */}
        {criticalReports > 0 && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <strong>Critical Alert:</strong> {criticalReports} high-priority fraud(s) currently active. Exercise extreme caution.
            </AlertDescription>
          </Alert>
        )}

        {/* Reports List */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Reports</TabsTrigger>
            <TabsTrigger value="verified">Verified</TabsTrigger>
            <TabsTrigger value="critical">Critical</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {fraudReports.map((report) => (
              <Card key={report.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{report.title}</CardTitle>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <Badge className={getSeverityColor(report.severity)}>
                          {report.severity}
                        </Badge>
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                        <Badge className={getCategoryColor(report.category)}>
                          {report.category}
                        </Badge>
                        <Badge variant="outline">
                          {report.verifiedReports} reports
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>{getTimeAgo(report.timestamp)}</div>
                      <div>{report.location}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{report.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Affected Platforms:</strong>
                      <div className="mt-1">
                        {report.affectedPlatforms.map((platform) => (
                          <Badge key={platform} variant="outline" className="mr-1 mb-1">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {report.financialLoss && (
                      <div>
                        <strong>Financial Impact:</strong>
                        <div className="mt-1 text-red-600 font-semibold">
                          ${report.financialLoss.toLocaleString()} USD
                        </div>
                      </div>
                    )}
                  </div>

                  {report.tags.length > 0 && (
                    <div className="mt-4">
                      <strong className="text-sm">Tags:</strong>
                      <div className="mt-1">
                        {report.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="mr-1 mb-1 text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="verified" className="space-y-4">
            {fraudReports.filter(report => report.status === 'Verified').map((report) => (
              <Card key={report.id} className="hover:shadow-md transition-shadow border-green-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{report.title}</CardTitle>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <Badge className={getSeverityColor(report.severity)}>
                          {report.severity}
                        </Badge>
                        <Badge className="bg-green-100 text-green-800">
                          Verified
                        </Badge>
                        <Badge className={getCategoryColor(report.category)}>
                          {report.category}
                        </Badge>
                        <Badge variant="outline">
                          {report.verifiedReports} reports
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>{getTimeAgo(report.timestamp)}</div>
                      <div>{report.location}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{report.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Affected Platforms:</strong>
                      <div className="mt-1">
                        {report.affectedPlatforms.map((platform) => (
                          <Badge key={platform} variant="outline" className="mr-1 mb-1">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {report.financialLoss && (
                      <div>
                        <strong>Financial Impact:</strong>
                        <div className="mt-1 text-red-600 font-semibold">
                          ${report.financialLoss.toLocaleString()} USD
                        </div>
                      </div>
                    )}
                  </div>

                  {report.tags.length > 0 && (
                    <div className="mt-4">
                      <strong className="text-sm">Tags:</strong>
                      <div className="mt-1">
                        {report.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="mr-1 mb-1 text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="critical" className="space-y-4">
            {fraudReports.filter(report => report.severity === 'Critical').map((report) => (
              <Card key={report.id} className="hover:shadow-md transition-shadow border-red-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 text-red-800">{report.title}</CardTitle>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <Badge className="bg-red-100 text-red-800">
                          Critical
                        </Badge>
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                        <Badge className={getCategoryColor(report.category)}>
                          {report.category}
                        </Badge>
                        <Badge variant="outline">
                          {report.verifiedReports} reports
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>{getTimeAgo(report.timestamp)}</div>
                      <div>{report.location}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{report.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Affected Platforms:</strong>
                      <div className="mt-1">
                        {report.affectedPlatforms.map((platform) => (
                          <Badge key={platform} variant="outline" className="mr-1 mb-1">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {report.financialLoss && (
                      <div>
                        <strong>Financial Impact:</strong>
                        <div className="mt-1 text-red-600 font-semibold">
                          ${report.financialLoss.toLocaleString()} USD
                        </div>
                      </div>
                    )}
                  </div>

                  {report.tags.length > 0 && (
                    <div className="mt-4">
                      <strong className="text-sm">Tags:</strong>
                      <div className="mt-1">
                        {report.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="mr-1 mb-1 text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="recent" className="space-y-4">
            {fraudReports
              .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
              .slice(0, 10)
              .map((report) => (
              <Card key={report.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{report.title}</CardTitle>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <Badge className={getSeverityColor(report.severity)}>
                          {report.severity}
                        </Badge>
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                        <Badge className={getCategoryColor(report.category)}>
                          {report.category}
                        </Badge>
                        <Badge variant="outline">
                          {report.verifiedReports} reports
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>{getTimeAgo(report.timestamp)}</div>
                      <div>{report.location}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{report.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Affected Platforms:</strong>
                      <div className="mt-1">
                        {report.affectedPlatforms.map((platform) => (
                          <Badge key={platform} variant="outline" className="mr-1 mb-1">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {report.financialLoss && (
                      <div>
                        <strong>Financial Impact:</strong>
                        <div className="mt-1 text-red-600 font-semibold">
                          ${report.financialLoss.toLocaleString()} USD
                        </div>
                      </div>
                    )}
                  </div>

                  {report.tags.length > 0 && (
                    <div className="mt-4">
                      <strong className="text-sm">Tags:</strong>
                      <div className="mt-1">
                        {report.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="mr-1 mb-1 text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default FraudReportPage;