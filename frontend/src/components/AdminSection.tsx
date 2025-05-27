
import React from 'react';
import { useData } from '@/contexts/DataContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const AdminSection: React.FC = () => {
  const { user, analytics, items } = useData();
  
  // Only render for admin users
  if (!user?.isAdmin) {
    return null;
  }
  
  // Total statistics
  const totalClicks = analytics.reduce((acc, curr) => acc + curr.clicks, 0);
  const totalRevenue = analytics.reduce((acc, curr) => acc + curr.revenue, 0);
  const avgConversion = analytics.reduce((acc, curr) => acc + curr.conversion, 0) / analytics.length;
  
  return (
    <div id="analytics" className="py-8 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Admin Analytics</h2>
          <Button className="bg-brand-purple hover:bg-brand-purple/90">
            Download Report
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalClicks}</div>
              <p className="text-xs text-muted-foreground">
                From {analytics.length} listed items
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalRevenue.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">
                $0.25 per click
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Average Conversion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{(avgConversion * 100).toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground">
                Click to purchase ratio
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Item Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead className="text-right">Clicks</TableHead>
                  <TableHead className="text-right">Conversion</TableHead>
                  <TableHead className="text-right">Revenue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {analytics
                  .sort((a, b) => b.revenue - a.revenue)
                  .map((analytic) => (
                    <TableRow key={analytic.itemId}>
                      <TableCell className="font-medium">{analytic.itemTitle}</TableCell>
                      <TableCell className="text-right">{analytic.clicks}</TableCell>
                      <TableCell className="text-right">{(analytic.conversion * 100).toFixed(1)}%</TableCell>
                      <TableCell className="text-right">${analytic.revenue.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminSection;
