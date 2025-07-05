import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertTriangle, Shield, TrendingUp, Activity } from 'lucide-react';
import { liveThreats, type LiveThreat } from '@/data/liveThreatsData';

const ThreatDashboardPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
      case 'Active': return 'bg-red-100 text-red-800';
      case 'Contained': return 'bg-yellow-100 text-yellow-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
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

  const criticalThreats = liveThreats.filter(threat => threat.severity === 'Critical');
  const activeThreats = liveThreats.filter(threat => threat.status === 'Active');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader 
        title="Live Threat Dashboard" 
        subtitle="Real-time cybersecurity threats and incidents from around the world"
      />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Alert Banner */}
        {criticalThreats.length > 0 && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <strong>Critical Alert:</strong> {criticalThreats.length} critical threat(s) currently active. Immediate attention recommended.
            </AlertDescription>
          </Alert>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Threats</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{liveThreats.length}</div>
              <p className="text-xs text-muted-foreground">Last 24 hours</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeThreats.length}</div>
              <p className="text-xs text-muted-foreground">Currently ongoing</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blocked Attempts</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127,543</div>
              <p className="text-xs text-muted-foreground">+12% from yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Risk Level</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">High</div>
              <p className="text-xs text-muted-foreground">Elevated threat activity</p>
            </CardContent>
          </Card>
        </div>

        {/* Live Updates */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Live Threat Feed</h2>
            <div className="text-sm text-muted-foreground">
              Last updated: {currentTime.toLocaleTimeString()}
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Threats</TabsTrigger>
            <TabsTrigger value="critical">Critical</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="resolved">Resolved</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {liveThreats.map((threat) => (
              <Card key={threat.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{threat.title}</CardTitle>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getSeverityColor(threat.severity)}>
                          {threat.severity}
                        </Badge>
                        <Badge className={getStatusColor(threat.status)}>
                          {threat.status}
                        </Badge>
                        <Badge variant="outline">{threat.type}</Badge>
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>{getTimeAgo(threat.timestamp)}</div>
                      <div>{threat.source}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{threat.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Affected Regions:</strong>
                      <div className="mt-1">
                        {threat.affectedRegions.map((region) => (
                          <Badge key={region} variant="outline" className="mr-1 mb-1">
                            {region}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <strong>Affected Sectors:</strong>
                      <div className="mt-1">
                        {threat.affectedSectors.map((sector) => (
                          <Badge key={sector} variant="outline" className="mr-1 mb-1">
                            {sector}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="critical" className="space-y-4">
            {criticalThreats.map((threat) => (
              <Card key={threat.id} className="border-red-200 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 text-red-800">{threat.title}</CardTitle>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-red-100 text-red-800">Critical</Badge>
                        <Badge className={getStatusColor(threat.status)}>
                          {threat.status}
                        </Badge>
                        <Badge variant="outline">{threat.type}</Badge>
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>{getTimeAgo(threat.timestamp)}</div>
                      <div>{threat.source}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{threat.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Affected Regions:</strong>
                      <div className="mt-1">
                        {threat.affectedRegions.map((region) => (
                          <Badge key={region} variant="outline" className="mr-1 mb-1">
                            {region}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <strong>Affected Sectors:</strong>
                      <div className="mt-1">
                        {threat.affectedSectors.map((sector) => (
                          <Badge key={sector} variant="outline" className="mr-1 mb-1">
                            {sector}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="active" className="space-y-4">
            {activeThreats.map((threat) => (
              <Card key={threat.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{threat.title}</CardTitle>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getSeverityColor(threat.severity)}>
                          {threat.severity}
                        </Badge>
                        <Badge className="bg-red-100 text-red-800">Active</Badge>
                        <Badge variant="outline">{threat.type}</Badge>
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>{getTimeAgo(threat.timestamp)}</div>
                      <div>{threat.source}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{threat.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Affected Regions:</strong>
                      <div className="mt-1">
                        {threat.affectedRegions.map((region) => (
                          <Badge key={region} variant="outline" className="mr-1 mb-1">
                            {region}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <strong>Affected Sectors:</strong>
                      <div className="mt-1">
                        {threat.affectedSectors.map((sector) => (
                          <Badge key={sector} variant="outline" className="mr-1 mb-1">
                            {sector}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="resolved" className="space-y-4">
            {liveThreats.filter(threat => threat.status === 'Resolved').map((threat) => (
              <Card key={threat.id} className="opacity-75 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{threat.title}</CardTitle>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getSeverityColor(threat.severity)}>
                          {threat.severity}
                        </Badge>
                        <Badge className="bg-green-100 text-green-800">Resolved</Badge>
                        <Badge variant="outline">{threat.type}</Badge>
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>{getTimeAgo(threat.timestamp)}</div>
                      <div>{threat.source}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{threat.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Affected Regions:</strong>
                      <div className="mt-1">
                        {threat.affectedRegions.map((region) => (
                          <Badge key={region} variant="outline" className="mr-1 mb-1">
                            {region}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <strong>Affected Sectors:</strong>
                      <div className="mt-1">
                        {threat.affectedSectors.map((sector) => (
                          <Badge key={sector} variant="outline" className="mr-1 mb-1">
                            {sector}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
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

export default ThreatDashboardPage;