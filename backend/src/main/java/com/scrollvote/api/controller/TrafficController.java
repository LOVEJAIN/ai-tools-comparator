package com.scrollvote.api.controller;

import com.google.analytics.data.v1beta.BetaAnalyticsDataClient;
import com.google.analytics.data.v1beta.BetaAnalyticsDataSettings;
import com.google.analytics.data.v1beta.RunReportRequest;
import com.google.analytics.data.v1beta.DateRange;
//import com.google.analytics.data.v1beta.Dimension;
import com.google.analytics.data.v1beta.Metric;
import com.google.analytics.data.v1beta.RunReportResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.FileInputStream;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/traffic")
public class TrafficController {
    
    private static final String PROPERTY_ID = "properties/355803310";
    
    private static final String SERVICE_ACCOUNT_KEY_PATH = "/Users/lovejain/Downloads/ai-toolkit-460418-4763217d5d68.json";

    @GetMapping("/summary")
    public Map<String, Object> getTrafficSummary() throws Exception {
        BetaAnalyticsDataSettings settings = BetaAnalyticsDataSettings.newBuilder()
            .setCredentialsProvider(() ->
                com.google.auth.oauth2.ServiceAccountCredentials.fromStream(
                    new FileInputStream(SERVICE_ACCOUNT_KEY_PATH)))
            .build();
        try (BetaAnalyticsDataClient analyticsData = BetaAnalyticsDataClient.create(settings)) {
            RunReportRequest request = RunReportRequest.newBuilder()
                .setProperty(PROPERTY_ID)
                .addDateRanges(DateRange.newBuilder().setStartDate("7daysAgo").setEndDate("today").build())
                .addMetrics(Metric.newBuilder().setName("activeUsers").build())
                .addMetrics(Metric.newBuilder().setName("sessions").build())
                .build();
            RunReportResponse response = analyticsData.runReport(request);
            Map<String, Object> result = new HashMap<>();
            if (response.getRowsCount() > 0) {
                result.put("activeUsers", response.getRows(0).getMetricValues(0).getValue());
                result.put("sessions", response.getRows(0).getMetricValues(1).getValue());
            }
            return result;
        }
    }
} 