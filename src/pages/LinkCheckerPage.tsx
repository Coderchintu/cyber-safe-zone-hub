import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const LinkCheckerPage = () => {
  const [url, setUrl] = useState('');
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState<any>(null);

  const checkUrl = async () => {
    if (!url) return;
    
    setChecking(true);
    // Simulate URL checking
    setTimeout(() => {
      const isSafe = Math.random() > 0.3; // 70% chance of being safe
      setResult({
        url,
        safe: isSafe,
        riskLevel: isSafe ? 'Low' : ['Medium', 'High', 'Critical'][Math.floor(Math.random() * 3)],
        threats: isSafe ? [] : ['Phishing', 'Malware', 'Suspicious Redirects'][Math.floor(Math.random() * 3)],
        reputation: isSafe ? 'Good' : 'Poor',
        lastScanned: new Date().toISOString()
      });
      setChecking(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader 
        title="Safe Link Checker" 
        subtitle="Verify the safety of URLs before clicking"
      />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto mb-8">
          <CardHeader>
            <CardTitle>Check URL Safety</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL to check (e.g., https://example.com)"
                className="flex-1"
              />
              <Button onClick={checkUrl} disabled={!url || checking}>
                {checking ? 'Checking...' : 'Check URL'}
              </Button>
            </div>
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

              {!result.safe && result.threats && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    <strong>Detected Threats:</strong> {result.threats}
                  </AlertDescription>
                </Alert>
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