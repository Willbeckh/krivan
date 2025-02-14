import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Instagram } from "lucide-react"; // Import Instagram icon

const InsightsCard = () => {
  const mockInsights = {
    followers: "10K+",
    engagement: "5%",
    reach: "20K+",
  };

  return (
    <Card className="w-full md:w-1/2 lg:w-1/3 xl:w-[250px] cursor-pointer">
      {" "}
      {/* Slightly wider */}
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg">Instagram Insights</CardTitle>
          <CardDescription>Last 7 Days</CardDescription>
        </div>
        <Instagram className="h-6 w-6 text-[#C9A760]" /> {/* Instagram icon */}
      </CardHeader>
      <CardContent className="space-y-2">
        {" "}
        {/* Added spacing */}
        <div className="flex items-center justify-between">
          <span>Followers</span>
          <span className="font-semibold">{mockInsights.followers}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Engagement</span>
          <span className="font-semibold">{mockInsights.engagement}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Reach</span>
          <span className="font-semibold">{mockInsights.reach}</span>
        </div>
      </CardContent>
      {/* Optional CardFooter */}
      {/* <CardFooter>
        <p className="text-sm text-muted-foreground">Updated 2 hours ago</p>
      </CardFooter> */}
    </Card>
  );
};

export default InsightsCard;
