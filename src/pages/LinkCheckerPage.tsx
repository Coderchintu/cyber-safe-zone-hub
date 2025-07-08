import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, CheckCircle, Search } from 'lucide-react';
import { checkURL } from '@/services/urlChecker';

const LinkCheckerPage = () => {
  const [url, setUrl] = useState('');
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState<any>(null);

  const checkUrl = async () => {
    if (!url) return;
    
    setChecking(true);
    try {
      const result = await checkURL(url);
      setResult(result);
    } catch (error) {
      console.error('URL check failed:', error);
      setResult({
        url,
        safe: false,
        riskLevel: 'Critical',
        threats: ['Analysis Failed'],
        reputation: 'Unknown',
        lastScanned: new Date().toISOString()
      });
    } finally {
      setChecking(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader 
        title="Real-Time Link Security Scanner" 
        subtitle="Check URLs against global phishing databases and security threat intelligence"
      />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              <CardTitle>Advanced URL Security Analysis</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground">
              Real-time scanning against PhishTank database, SSL verification, and domain reputation analysis
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL to scan (e.g., https://suspicious-site.com)"
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && checkUrl()}
              />
              <Button onClick={checkUrl} disabled={!url || checking}>
                {checking ? 'Scanning...' : 'Scan URL'}
              </Button>
            </div>
            {checking && (
              <div className="text-sm text-muted-foreground">
                Checking against PhishTank database, analyzing domain patterns, and verifying SSL certificates...
              </div>
            )}
          </CardContent>
        </Card>

        {result && (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex items-center gap-2">
                {result.safe ? (
                  <CheckCircle className="h-6 w-6 text-green-600" />
                ) : (
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                )}
                <CardTitle className={result.safe ? 'text-green-800' : 'text-red-800'}>
                  {result.safe ? 'URL is Safe' : 'URL is Potentially Dangerous'}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-3 rounded break-all text-sm">
                {result.url}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <strong>Risk Level:</strong>
                  <Badge className={`ml-2 ${result.safe ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {result.riskLevel}
                  </Badge>
                </div>
                <div>
                  <strong>Reputation:</strong>
                  <span className="ml-2">{result.reputation}</span>
                </div>
              </div>

              {!result.safe && result.threats && result.threats.length > 0 && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    <strong>Detected Threats:</strong>
                    <ul className="list-disc list-inside mt-1">
                      {result.threats.map((threat, index) => (
                        <li key={index}>{threat}</li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              )}

              {result.details && (
                <div className="space-y-2 text-sm">
                  <h4 className="font-semibold">Technical Details:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {result.details.phishTankResult !== undefined && (
                      <div>
                        <strong>PhishTank Status:</strong> {result.details.phishTankResult ? 'Listed as Phishing' : 'Not in Database'}
                      </div>
                    )}
                    {result.details.sslStatus && (
                      <div>
                        <strong>SSL Certificate:</strong> {result.details.sslStatus}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default LinkCheckerPage;