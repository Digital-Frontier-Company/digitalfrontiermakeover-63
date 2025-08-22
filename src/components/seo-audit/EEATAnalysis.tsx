import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Award, 
  Shield, 
  Star,
  CheckCircle, 
  AlertTriangle
} from "lucide-react";

const EEATAnalysis = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const eeatScores = {
    experience: 65,
    expertise: 78,
    authoritativeness: 72,
    trustworthiness: 88,
  };

  const overallEEAT = Math.round(
    Object.values(eeatScores).reduce((sum, score) => sum + score, 0) / 
    Object.keys(eeatScores).length
  );

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">E-E-A-T Analysis</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience, Expertise, Authoritativeness, and Trustworthiness assessment
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="detailed">Detailed Analysis</TabsTrigger>
              <TabsTrigger value="improvements">Improvements</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid lg:grid-cols-5 gap-6">
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle>Overall E-E-A-T</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="35"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          className="text-muted"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="35"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray={`${2 * Math.PI * 35}`}
                          strokeDashoffset={`${2 * Math.PI * 35 * (1 - overallEEAT / 100)}`}
                          className="text-primary"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold">{overallEEAT}</span>
                      </div>
                    </div>
                    <Badge variant={overallEEAT >= 80 ? "default" : overallEEAT >= 60 ? "secondary" : "destructive"}>
                      {overallEEAT >= 80 ? "Strong" : overallEEAT >= 60 ? "Good" : "Weak"}
                    </Badge>
                  </CardContent>
                </Card>

                {Object.entries(eeatScores).map(([category, score]) => (
                  <Card key={category} className="text-center">
                    <CardHeader>
                      <CardTitle className="capitalize text-sm">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">{score}%</div>
                      <Progress value={score} className="h-2 mb-2" />
                      <Badge variant={score >= 80 ? "default" : score >= 60 ? "secondary" : "destructive"}>
                        {score >= 80 ? "Strong" : score >= 60 ? "Good" : "Weak"}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="detailed">
              <Card>
                <CardHeader>
                  <CardTitle>Detailed E-E-A-T Factors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Detailed E-E-A-T analysis coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="improvements">
              <Card>
                <CardHeader>
                  <CardTitle>Improvement Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">E-E-A-T improvement suggestions coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default EEATAnalysis;