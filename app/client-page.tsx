"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { useState } from "react"

export default function ClientPage() {
  const [isHovered, setIsHovered] = useState(false)

  const mentionsAndReachData = [
    { date: "14 Jul", mentions: 120, reach: 2500000 },
    { date: "21 Jul", mentions: 150, reach: 3200000 },
    { date: "28 Jul", mentions: 180, reach: 4100000 },
    { date: "4 Aug", mentions: 200, reach: 5000000 },
    { date: "11 Aug", mentions: 250, reach: 6800000 },
    { date: "18 Aug", mentions: 220, reach: 5500000 },
    { date: "25 Aug", mentions: 280, reach: 7200000 },
    { date: "1 Sep", mentions: 300, reach: 8500000 },
    { date: "8 Sep", mentions: 350, reach: 12000000 },
    { date: "15 Sep", mentions: 320, reach: 9800000 },
    { date: "22 Sep", mentions: 280, reach: 7500000 },
    { date: "29 Sep", mentions: 250, reach: 6200000 },
    { date: "6 Oct", mentions: 300, reach: 9000000 },
    { date: "13 Oct", mentions: 380, reach: 15000000 },
  ]

  const sentimentDistributionData = [
    { name: "Negative", value: 1800, percentage: 57 },
    { name: "Positive", value: 1100, percentage: 35 },
    { name: "Neutral", value: 237, percentage: 8 },
  ]

  const sentimentEvolutionData = [
    { date: "08 Jul", negative: 40, positive: 20, neutral: 10 },
    { date: "29 Jul", negative: 50, positive: 25, neutral: 12 },
    { date: "19 Aug", negative: 45, positive: 30, neutral: 15 },
    { date: "09 Sep", negative: 35, positive: 40, neutral: 18 },
    { date: "29 Sep", negative: 30, positive: 50, neutral: 20 },
  ]

  const sentimentByMediaData = [
    { platform: "X(Twitter)", positive: 417, negative: 1043, neutral: 396 },
    { platform: "Facebook", positive: 263, negative: 188, neutral: 279 },
    { platform: "Instagram", positive: 123, negative: 68, neutral: 67 },
    { platform: "TikTok", positive: 28, negative: 51, neutral: 17 },
    { platform: "LinkedIn", positive: 24, negative: 7, neutral: 7 },
    { platform: "YouTube", positive: 105, negative: 62, neutral: 72 },
    { platform: "News", positive: 34, negative: 70, neutral: 81 },
    { platform: "Blogs", positive: 0, negative: 0, neutral: 7 },
    { platform: "Site", positive: 49, negative: 52, neutral: 164 },
    { platform: "Reddit", positive: 25, negative: 68, neutral: 83 },
    { platform: "Bluesky", positive: 342, negative: 159, neutral: 61 },
  ]

  const sentimentByLanguageData = [
    { language: "English", positive: 787, negative: 1514, neutral: 546 },
    { language: "Spanish", positive: 4, negative: 4, neutral: 3 },
    { language: "French", positive: 4, negative: 3, neutral: 1 },
    { language: "Dutch", positive: 6, negative: 10, neutral: 6 },
    { language: "Arabic", positive: 0, negative: 1, neutral: 3 },
    { language: "Portuguese", positive: 2, negative: 4, neutral: 2 },
    { language: "Italian", positive: 5, negative: 12, neutral: 8 },
    { language: "Afrikaans", positive: 0, negative: 0, neutral: 2 },
    { language: "Basque", positive: 1, negative: 0, neutral: 6 },
    { language: "Bengali", positive: 0, negative: 0, neutral: 1 },
  ]

  const emotionData = [
    { emotion: "Love", value: 35 },
    { emotion: "Joy", value: 28 },
    { emotion: "Surprise", value: 15 },
    { emotion: "Anger", value: 12 },
    { emotion: "Sadness", value: 10 },
    { emotion: "Fear", value: 9 },
    { emotion: "Disgust", value: 5 },
  ]

  const COLORS = ["#7d5ee5", "#4cc9f0", "#968ff9"]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: "PILFM 54th — West Papua Media Watch Dashboard",
            description:
              "Monitoring digital engagement and sentiment around West Papua and regional discourse including PIF Summit, ULMWP, and FreeWestPapua movements.",
            keywords: "West Papua, PIF Summit, PILFM 54th, Benny Wenda, ULMWP, FreeWestPapua",
            author: {
              "@type": "Organization",
              name: "West Papua Media Watch",
            },
            datePublished: "2024-10-09",
            dateModified: "2025-10-09",
          }),
        }}
      />

      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Analytics Report</h1>
            </div>
            <span className="text-2xl font-bold" style={{ color: "#7d5ee5" }}>
              SIGMA
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Monitored Keywords</span>
              <span classTrendingName="text-sm font-normal" style={{ color: "#968ff9" }}>
                SIGMA
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "PILFM 54th",
                "Benny Wenda",
                "ULMWP",
                "PIF Summit",
                "FreeWestPapua",
                "Rise of the Morning Star Flag",
                "Forum communique PIF",
                "West Papua",
                "West Papua Crisis",
                "West Papua and Kanaky",
                "PNG's 50th Independence Day",
                "Indonesia's Vice President visit",
                "Free West Papua",
              ].map((keyword) => (
                <div key={keyword} className="flex items-center p-3 rounded-lg" style={{ border: "1px solid #4cc9f0" }}>
                  <span className="text-sm font-medium text-gray-900">{keyword}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Summary sections */}
        <div
          className="mb-8 rounded-xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(150, 143, 249, 0.05) 0%, rgba(76, 201, 240, 0.05) 100%)",
            border: "2px solid rgba(125, 94, 229, 0.2)",
          }}
        >
          <div className="bg-white/80 backdrop-blur-sm">
            <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "rgba(125, 94, 229, 0.1)" }}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: "#7d5ee5" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">AI Summary: Volume of Mentions & Reach</h2>
                  <p className="text-sm text-gray-500">Generated intelligence analysis</p>
                </div>
              </div>
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: "rgba(150, 143, 249, 0.15)", color: "#7d5ee5" }}
              >
                SIGMA AI
              </span>
            </div>

            <div className="px-6 py-8">
              <div className="prose prose-gray max-w-none">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-8 rounded-full" style={{ backgroundColor: "#4cc9f0" }}></span>
                    Patterns in Mentions and Reach Dynamics
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Between 9 October 2024 and 9 October 2025, the dataset reveals significant fluctuations in digital
                    mentions and network reach, illustrating evolving engagement dynamics within the Pacific regional
                    discourse, particularly on topics surrounding West Papua, self-determination, and human rights
                    advocacy.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="pl-6 border-l-4" style={{ borderColor: "#968ff9" }}>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">1. Significant Peaks</h4>
                    <div className="space-y-3 text-gray-700 leading-relaxed">
                      <p>
                        On 8 October 2025, a marked surge in mentions was recorded, reaching a total exposure of 117
                        across major social platforms. The spike correlated with renewed attention to the geopolitical
                        situation in West Papua, as highlighted in multiple discussions.
                      </p>
                      <p>
                        For instance, DANIEL GOBAI's post referenced Russian military involvement, triggering a regional
                        dialogue on international influence and military presence.
                      </p>
                      <p>
                        Similarly, Anthony Craig, a long-time advocate for West Papuan rights, shared updates on the
                        ongoing humanitarian crisis and alleged military operations, generating extensive engagement due
                        to the post's emotional gravity and geopolitical resonance.
                      </p>
                    </div>
                  </div>

                  <div className="pl-6 border-l-4" style={{ borderColor: "#968ff9" }}>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">2. Content Analysis</h4>
                    <p className="text-gray-700 leading-relaxed">
                      The majority of high-performing mentions centered on human rights, self-determination, and
                      regional solidarity. While the emotional tone remained largely neutral, the subject intensity
                      amplified organic reach. Mentions that combined verified information with empathetic narratives
                      tended to circulate faster within advocacy networks and regional communities.
                    </p>
                  </div>

                  <div className="pl-6 border-l-4" style={{ borderColor: "#968ff9" }}>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">3. Decoupling of Mentions and Reach</h4>
                    <div className="space-y-3 text-gray-700 leading-relaxed">
                      <p>
                        In several instances, reach did not correlate directly with mention volume. Posts with limited
                        engagement counts still achieved broad dissemination through algorithmic surfacing —
                        particularly those containing trending hashtags related to regional diplomacy or crisis
                        response.
                      </p>
                      <p>
                        This demonstrates how structural amplification (via platform algorithms) can elevate posts that
                        align with current geopolitical events, even when initial interaction is low.
                      </p>
                    </div>
                  </div>

                  <div className="pl-6 border-l-4" style={{ borderColor: "#968ff9" }}>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">4. Low-Activity Periods</h4>
                    <p className="text-gray-700 leading-relaxed">
                      A decline in activity occurred in late September 2025, marked by a shift toward neutral commentary
                      and reduced urgency. Discussions became more reflective, focusing on cultural expression,
                      governance, and environmental policy rather than immediate crises. This plateau reflects audience
                      fatigue and topic saturation, a common trend following prolonged high-emotion discourse cycles.
                    </p>
                  </div>
                </div>

                <div className="mt-10 p-6 rounded-xl" style={{ backgroundColor: "rgba(76, 201, 240, 0.08)" }}>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg
                      className="w-6 h-6"
                      style={{ color: "#4cc9f0" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 001-1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                      />
                    </svg>
                    Drivers Behind Audience & Exposure Trends
                  </h4>

                  <div className="space-y-5">
                    {[
                      {
                        title: "1. Engagement Triggers",
                        content:
                          "Major engagement peaks aligned with humanitarian crises, diplomatic meetings, and symbolic events such as flag-raising commemorations and statements during the PIF Summit. Posts linking human rights with international diplomacy resonated most strongly, suggesting audience sensitivity to cross-border narratives.",
                      },
                      {
                        title: "2. High-Impact Mentions",
                        content:
                          "Narrative-rich posts — those that combined first-hand testimony with geopolitical framing — achieved the widest reach. For example, Anthony Craig's mention merged emotional storytelling with factual updates, increasing perceived authenticity and shareability.",
                      },
                      {
                        title: "3. Influence of Digital Actors",
                        content:
                          "Independent activists, journalists, and regional influencers played critical roles in amplifying discussion flow. Their pre-established networks acted as force multipliers, shaping the information topology of the discourse. The influence effect was strongest among users with prior credibility in advocacy and political commentary.",
                      },
                      {
                        title: "4. Platform-Specific Dynamics",
                        content:
                          "Analysis indicates that x.com (formerly Twitter) served as the primary conduit for rapid narrative diffusion. The platform's real-time conversational nature favored sentiment-driven bursts, enabling topics to trend rapidly through emotional resonance rather than structured campaigns.",
                      },
                      {
                        title: "5. Semantic and Emotional Patterns",
                        content:
                          'High-performing posts frequently contained keywords like "genocide," "human rights," "independence," and "solidarity." These terms formed semantic clusters around crisis awareness and advocacy, showing that emotionally charged vocabulary can forecast surges in both mentions and audience reach.',
                      },
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                        <h5 className="font-bold text-gray-900 mb-2">{item.title}</h5>
                        <p className="text-gray-700 leading-relaxed">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 p-6 rounded-xl" style={{ backgroundColor: "rgba(125, 94, 229, 0.08)" }}>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg
                      className="w-6 h-6"
                      style={{ color: "#7d5ee5" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    Strategic Intelligence Insights
                  </h4>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Narrative Monitoring:",
                        content:
                          "Regularly track cross-platform surges in keywords tied to geopolitical or humanitarian issues. Such spikes can serve as early indicators of narrative shifts or information operations.",
                      },
                      {
                        title: "Discourse Mapping:",
                        content:
                          "Use AI models to map influencer clusters and topic diffusion paths. Identifying who amplifies which narrative stream helps detect emerging alliances or coordinated advocacy trends.",
                      },
                      {
                        title: "Emotional Sentiment Layering:",
                        content:
                          "Evaluate not just sentiment polarity but also emotional intensity (anger, empathy, hope). These cues often predict engagement momentum more accurately than positive/negative balance alone.",
                      },
                      {
                        title: "Predictive Engagement Modeling:",
                        content:
                          "Integrate historical volume patterns into predictive dashboards. Peaks surrounding regional summits or anniversaries can help analysts forecast future online mobilization periods.",
                      },
                      {
                        title: "Narrative Integrity Assurance:",
                        content:
                          "Distinguish between organic discourse and amplified coordination by measuring anomaly rates in posting frequency, content similarity, and bot-like propagation.",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex gap-3">
                        <div
                          className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                          style={{ backgroundColor: "#7d5ee5" }}
                        ></div>
                        <div>
                          <span className="font-bold text-gray-900">{item.title}</span>
                          <p className="text-gray-700 leading-relaxed mt-1">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 text-gray-700 leading-relaxed italic">
                    By reframing engagement data through an AI-driven intelligence lens, analysts can move beyond
                    surface-level metrics to understand the dynamics of influence, coordination, and emotional
                    mobilization shaping the Pacific's digital information environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mb-8 rounded-xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(76, 201, 240, 0.05) 0%, rgba(150, 143, 249, 0.05) 100%)",
            border: "2px solid rgba(76, 201, 240, 0.2)",
          }}
        >
          <div className="bg-white/80 backdrop-blur-sm">
            <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "rgba(76, 201, 240, 0.1)" }}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: "#4cc9f0" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">AI Summary: Sentiment Over Time</h2>
                  <p className="text-sm text-gray-500">Generated intelligence analysis</p>
                </div>
              </div>
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: "rgba(150, 143, 249, 0.15)", color: "#7d5ee5" }}
              >
                SIGMA AI
              </span>
            </div>

            <div className="px-6 py-8">
              <div className="prose prose-gray max-w-none">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-8 rounded-full" style={{ backgroundColor: "#968ff9" }}></span>
                    Shifts in Positive and Negative Sentiment
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    During the observation period from 9 October 2024 to 9 October 2025, several notable shifts in
                    sentiment dynamics were recorded, reflecting evolving public perceptions and discourse intensity
                    surrounding West Papua, PIF Summit, and related regional topics.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="pl-6 border-l-4" style={{ borderColor: "#4cc9f0" }}>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Significant Increase in Positive Mentions — 15 March 2025
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Positive mentions rose sharply from 20 to 50 (a 150% increase). This spike coincided with the
                      Pacific Islands Forum (PIF) communications emphasizing solidarity, environmental cooperation, and
                      peaceful resolution narratives. Discussions around regional diplomacy and self-determination
                      movements gained traction, reflecting a more optimistic tone in regional sentiment.
                    </p>
                  </div>

                  <div className="pl-6 border-l-4" style={{ borderColor: "#4cc9f0" }}>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Drop in Negative Mentions — 22 April 2025</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Negative sentiment fell from 40 to 15 (-62.5%), following reduced tension in online discussions
                      after a period of misinformation correction and de-escalation of conflict-related rhetoric. Key
                      contributors to this improvement included verified sources clarifying reports on military activity
                      in West Papua, which helped restore informational stability and reduce polarization.
                    </p>
                  </div>

                  <div className="pl-6 border-l-4" style={{ borderColor: "#4cc9f0" }}>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Polar Shift — 10 July 2025</h4>
                    <p className="text-gray-700 leading-relaxed">
                      A distinct polarity change was recorded: discussions previously dominated by negative sentiment
                      turned more balanced, with positive sentiment climbing from 10 to 45 mentions. This turnaround
                      followed the publication of transparent briefings from independent observers and statements by
                      regional actors advocating for dialogue. These credible updates increased trust in available
                      information and softened prior hostility in digital conversations.
                    </p>
                  </div>

                  <div className="pl-6 border-l-4" style={{ borderColor: "#4cc9f0" }}>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Stability Period — Late August 2025</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Between 20–30 August, sentiment remained neutral and stable. The discussion tempo slowed, and
                      engagement centered on analytical or academic discourse, including reflections on past conflicts,
                      cultural identity, and regional cooperation. This lull suggests consolidation of public
                      understanding after several months of emotionally charged narratives.
                    </p>
                  </div>
                </div>

                <div className="mt-10 p-6 rounded-xl" style={{ backgroundColor: "rgba(150, 143, 249, 0.08)" }}>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg
                      className="w-6 h-6"
                      style={{ color: "#968ff9" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Drivers Behind Sentiment Trends
                  </h4>

                  <div className="space-y-5">
                    {[
                      {
                        title: "Geopolitical Communications:",
                        content:
                          "Statements by PIF member states, diplomatic missions, and civil organizations were the dominant triggers for sentiment fluctuations. Each wave of communication — particularly around human rights, regional unity, and security cooperation — generated measurable engagement surges.",
                      },
                      {
                        title: "Narrative Reframing & Fact-Checking:",
                        content:
                          "The moderation of sentiment in April and July indicates the growing influence of fact-checking ecosystems and AI-assisted media verification tools. These interventions dampened misinformation-driven negativity and promoted data-grounded discussions.",
                      },
                      {
                        title: "Viral Advocacy & Independent Media:",
                        content:
                          "Grassroots movements, citizen journalists, and advocacy networks (notably on X.com and Facebook) continued to shape engagement volume. Viral posts often combined personal stories with factual updates, amplifying reach and emotional connection.",
                      },
                      {
                        title: "Recurring Themes:",
                        content:
                          "Throughout the year, key recurring frames included self-determination, regional solidarity, climate justice, and human rights. Positive sentiment was strongest around collaboration and peace narratives, while negative peaks aligned with crisis reports and political friction.",
                      },
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                        <h5 className="font-bold text-gray-900 mb-2">{item.title}</h5>
                        <p className="text-gray-700 leading-relaxed">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 p-6 rounded-xl" style={{ backgroundColor: "rgba(76, 201, 240, 0.08)" }}>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg
                      className="w-6 h-6"
                      style={{ color: "#4cc9f0" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Strategic Takeaways for Analytical Monitoring
                  </h4>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Leverage Temporal Sentiment Analysis:",
                        content:
                          "Monitor how sentiment polarity aligns with specific diplomatic events and public statements to anticipate engagement surges.",
                      },
                      {
                        title: "Enhance Early Warning Systems:",
                        content:
                          "AI-based detection of narrative escalation (particularly around conflict keywords) can serve as an early indicator for digital tension or potential misinformation spikes.",
                      },
                      {
                        title: "Prioritize Contextual Interpretation:",
                        content:
                          "Emotional polarity alone is insufficient — correlation with geopolitical context, media credibility, and influencer impact is critical to understanding real engagement quality.",
                      },
                      {
                        title: "Promote Verified Discourse:",
                        content:
                          "Encourage verified institutional voices and fact-based reporting to reduce sentiment volatility and improve public understanding across regions.",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex gap-3">
                        <div
                          className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                          style={{ backgroundColor: "#4cc9f0" }}
                        ></div>
                        <div>
                          <span className="font-bold text-gray-900">{item.title}</span>
                          <p className="text-gray-700 leading-relaxed mt-1">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 text-gray-700 leading-relaxed italic">
                    By integrating these findings into an AI-driven intelligence dashboard, analysts can derive
                    actionable insights from sentiment patterns — not merely as reflections of emotion, but as
                    predictive indicators of digital stability, regional perception shifts, and emerging information
                    risks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Executive Summary</span>
              <span className="text-sm font-normal" style={{ color: "#968ff9" }}>
                SIGMA
              </span>
            </CardTitle>
            <p className="text-sm text-gray-500">08 Jul 2025 - 13 Oct 2025</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Mentions", value: "11.9K" },
                { label: "Reach", value: "265.5M" },
                { label: "Likes", value: "287.4K" },
                { label: "Negative mentions", value: "1.8K" },
                { label: "Positive mentions", value: "1.1K" },
                { label: "Social mentions", value: "11.5K" },
                { label: "Social media reach", value: "257.6M" },
                { label: "Social media interactions", value: "6.1M" },
                { label: "Web mentions", value: "457" },
                { label: "Web reach", value: "7.8M" },
              ].map((metric) => (
                <div key={metric.label} className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold" style={{ color: "#7d5ee5" }}>
                    {metric.value}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Volume Of Mentions & Reach</span>
              <span className="text-sm font-normal" style={{ color: "#968ff9" }}>
                SIGMA
              </span>
            </CardTitle>
            <p className="text-sm text-gray-500">08 Jul 2025 - 13 Oct 2025</p>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-6">
              This chart tracks the total number of times your keywords of interest were mentioned online across the
              platforms you're tracking, along with the reach (total audience exposure). The evolution graph below
              provides a day-by-day breakdown, allowing you to identify trends and peak engagement periods.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-3xl font-bold" style={{ color: "#7d5ee5" }}>
                  11.9K
                </p>
                <p className="text-sm text-gray-600">Mentions</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: "#4cc9f0" }}>
                  265.5M
                </p>
                <p className="text-sm text-gray-600">Reach</p>
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mentionsAndReachData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="date" stroke="#6b7280" style={{ fontSize: "12px" }} />
                  <YAxis
                    yAxisId="left"
                    stroke="#7d5ee5"
                    style={{ fontSize: "12px" }}
                    label={{ value: "Mentions", angle: -90, position: "insideLeft", style: { fill: "#7d5ee5" } }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="#4cc9f0"
                    style={{ fontSize: "12px" }}
                    label={{ value: "Reach", angle: 90, position: "insideRight", style: { fill: "#4cc9f0" } }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                    }}
                    formatter={(value: number, name: string) => {
                      if (name === "reach") {
                        return [(value / 1000000).toFixed(1) + "M", "Reach"]
                      }
                      return [value, "Mentions"]
                    }}
                  />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="mentions"
                    stroke="#7d5ee5"
                    strokeWidth={3}
                    dot={{ fill: "#7d5ee5" }}
                    name="Mentions"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="reach"
                    stroke="#4cc9f0"
                    strokeWidth={3}
                    dot={{ fill: "#4cc9f0" }}
                    name="Reach"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Sentiment Distribution</span>
              <span className="text-sm font-normal" style={{ color: "#968ff9" }}>
                SIGMA
              </span>
            </CardTitle>
            <p className="text-sm text-gray-500">08 Jul 2025 - 13 Oct 2025</p>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-6">
              This chart tracks the overall sentiment (positive, negative, neutral) of your mentions over the period of
              time you've chosen. It provides insights into how public perception evolves over time, helping you
              understand shifts in attitude toward your brand or topics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4 mb-6">
                  {sentimentDistributionData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded"
                          style={{
                            backgroundColor:
                              item.name === "Negative" ? "#7d5ee5" : item.name === "Positive" ? "#4cc9f0" : "#968ff9",
                          }}
                        ></div>
                        <span className="text-sm font-medium text-gray-700">{item.name}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold" style={{ color: "#7d5ee5" }}>
                          {item.percentage}%
                        </p>
                        <p className="text-xs text-gray-500">{item.value.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sentimentDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ percentage }) => `${percentage}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {sentimentDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Sentiment Evolution</h4>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sentimentEvolutionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="date" stroke="#6b7280" style={{ fontSize: "12px" }} />
                      <YAxis stroke="#6b7280" style={{ fontSize: "12px" }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e5e7eb",
                          borderRadius: "8px",
                        }}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="negative" stroke="#7d5ee5" strokeWidth={2} />
                      <Line type="monotone" dataKey="positive" stroke="#4cc9f0" strokeWidth={2} />
                      <Line type="monotone" dataKey="neutral" stroke="#968ff9" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Sentiment By Media Type</span>
              <span className="text-sm font-normal" style={{ color: "#968ff9" }}>
                SIGMA
              </span>
            </CardTitle>
            <p className="text-sm text-gray-500">08 Jul 2025 - 13 Oct 2025</p>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-6">
              This chart breaks down the sentiment (positive, neutral, negative) of mentions across different media
              platforms. It helps you understand how your brand or topics are perceived on each platform, revealing
              where positive or negative sentiments are most common.
            </p>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sentimentByMediaData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis type="number" stroke="#6b7280" style={{ fontSize: "12px" }} />
                  <YAxis dataKey="platform" type="category" stroke="#6b7280" style={{ fontSize: "12px" }} width={100} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="negative" stackId="a" fill="#7d5ee5" />
                  <Bar dataKey="neutral" stackId="a" fill="#968ff9" />
                  <Bar dataKey="positive" stackId="a" fill="#4cc9f0" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Sentiment By Language</span>
              <span className="text-sm font-normal" style={{ color: "#968ff9" }}>
                SIGMA
              </span>
            </CardTitle>
            <p className="text-sm text-gray-500">08 Jul 2025 - 13 Oct 2025</p>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-6">
              This chart breaks down the sentiment (positive, neutral, negative) of mentions across different languages.
              It helps you understand how your brand or topics are perceived in different linguistic communities.
            </p>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sentimentByLanguageData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis type="number" stroke="#6b7280" style={{ fontSize: "12px" }} />
                  <YAxis dataKey="language" type="category" stroke="#6b7280" style={{ fontSize: "12px" }} width={80} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="negative" stackId="a" fill="#7d5ee5" />
                  <Bar dataKey="neutral" stackId="a" fill="#968ff9" />
                  <Bar dataKey="positive" stackId="a" fill="#4cc9f0" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Emoji Statistics</span>
              <span className="text-sm font-normal" style={{ color: "#968ff9" }}>
                SIGMA
              </span>
            </CardTitle>
            <p className="text-sm text-gray-500">08 Jul 2025 - 13 Oct 2025</p>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-6">
              This chart visualizes the most commonly used emojis within your mentions. It provides a quick snapshot of
              the emotions and reactions associated with your monitored keywords.
            </p>
            <div className="grid grid-cols-8 md:grid-cols-12 lg:grid-cols-16 gap-3">
              {[
                "📍",
                "🌍",
                "🔗",
                "⏰",
                "📏",
                "🔽",
                "✊",
                "🔥",
                "🇨🇺",
                "🇵🇬",
                "✊🏾",
                "🥰",
                "❤️",
                "🌹",
                "🇮🇩",
                "🙏",
                "🙏🏻",
                "🤍",
                "🇮🇱",
                "💙",
                "👉🏿",
                "❤",
                "✊🏿",
                "💚",
                "😭",
                "✨",
                "🫡",
                "✅",
                "🖤",
                "♥️",
                "💪",
                "🤣",
                "🇵🇸",
                "😍",
                "🇻🇳",
                "✊🏽",
                "🌿",
                "💔",
                "👇",
                "🎥",
              ].map((emoji, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  <span className="text-2xl">{emoji}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">● Mentions: 29</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Emotion Analysis</span>
              <span className="text-sm font-normal" style={{ color: "#968ff9" }}>
                SIGMA
              </span>
            </CardTitle>
            <p className="text-sm text-gray-500">08 Jul 2025 - 13 Oct 2025</p>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-6">
              This chart categorizes and quantifies the emotions expressed within your mentions. It offers insights into
              the emotional tone of the discussions.
            </p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={emotionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="emotion" stroke="#6b7280" style={{ fontSize: "12px" }} />
                  <YAxis stroke="#6b7280" style={{ fontSize: "12px" }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "white", border: "1px solid #e5e7eb", borderRadius: "8px" }}
                  />
                  <Bar dataKey="value" fill="#7d5ee5" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-gray-500 mt-4">Fear: 9 mentions</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Best Time To Post</span>
              <span className="text-sm font-normal" style={{ color: "#968ff9" }}>
                SIGMA
              </span>
            </CardTitle>
            <p className="text-sm text-gray-500">08 Jul 2025 - 13 Oct 2025</p>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              This chart breaks down the volume of mentions by day of the week, helping you understand which days see
              the most activity.
            </p>
            <div className="p-4 bg-purple-50 rounded-lg mb-6">
              <p className="text-lg font-bold text-center" style={{ color: "#7d5ee5" }}>
                Mentions peak on Tuesdays at 3 PM
              </p>
            </div>
            <div className="space-y-2">
              {[
                { day: "Tuesday", time: "11 AM", mentions: 42 },
                { day: "Tuesday", time: "12 PM", mentions: 30 },
                { day: "Wednesday", time: "8 AM", mentions: 30 },
                { day: "Saturday", time: "3 PM", mentions: 29 },
                { day: "Tuesday", time: "9 AM", mentions: 28 },
                { day: "Tuesday", time: "2 PM", mentions: 25 },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-900">
                    {item.day} - {item.time}
                  </span>
                  <span className="font-bold" style={{ color: "#4cc9f0" }}>
                    {item.mentions}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Trending Hashtags</span>
              <span className="text-sm font-normal" style={{ color: "#968ff9" }}>
                SIGMA
              </span>
            </CardTitle>
            <p className="text-sm text-gray-500">08 Jul 2025 - 13 Oct 2025</p>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-6">
              This section highlights the hashtags that are trending in relation to your monitored keywords, together
              with their number of occurrences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { tag: "#freewestpapua", count: 922 },
                { tag: "#indonesia", count: 613 },
                { tag: "#westpapua", count: 548 },
                { tag: "#papuamerdeka", count: 482 },
                { tag: "#fyp", count: 450 },
                { tag: "#m3+", count: 369 },
                { tag: "#m2+", count: 369 },
                { tag: "#papua", count: 332 },
                { tag: "#quake", count: 280 },
                { tag: "#viral", count: 242 },
                { tag: "#provinsi_papua", count: 217 },
                { tag: "#weak", count: 203 },
                { tag: "#shorts", count: 168 },
                { tag: "#earthquake", count: 167 },
                { tag: "#m4+", count: 167 },
                { tag: "#fishcutting", count: 166 },
                { tag: "#fish", count: 163 },
                { tag: "#moderate", count: 150 },
                { tag: "#sorotan", count: 146 },
                { tag: "#tuna", count: 110 },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-900">{item.tag}</span>
                  <span className="font-bold text-xs" style={{ color: "#7d5ee5" }}>
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* More detail data button */}

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Mentions</span>
              <span className="text-sm font-normal" style={{ color: "#968ff9" }}>
                SIGMA
              </span>
            </CardTitle>
            <p className="text-sm text-gray-500">Top mentions by engagement and recent activity</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Popular Mentions */}
              {[
                {
                  title:
                    "THE CHARM OF BANG ADIE'S SHARP MACHINE TO CUT TUNA VERY NEATLY #shorts #fish #fishcutting #subscribe",
                  date: "2025 October 02 10:00",
                  performance: "10/10 performance",
                  followers: "117K followers",
                  excerpt:
                    "kills #delicious #fish #lokalmarket Assalamualaikum Warohmatullahi Wabarokatuh, hello friends, welcome to the Vlogger Sorong YouTube chann...",
                  type: "popular",
                },
                {
                  title: "Cara potong ikan tenggiri #shorts #fyp #fishcutting #subcribe #fish",
                  date: "2025 September 09 05:22",
                  performance: "10/10 performance",
                  followers: "186K followers",
                  excerpt:
                    "ube #viral #trending #lokalmarket Assalamualaikum warohmatullahi wabarokatuh, welcome to the Afa Tuna Channel Afa Tuna Channel will...",
                  type: "popular",
                },
                {
                  title: "Warren Redlich - Chasing Dreams",
                  date: "2025 July 31 18:21",
                  performance: "10/10 performance",
                  followers: "101.1K followers",
                  excerpt: "@jvgraz @davameskOD West Papua You're welcome",
                  type: "popular",
                },
                {
                  title:
                    "Selama Koe Benar, Koe Tara Perlu Takut, sekalipun koe disalahin percayalah di hasil akhir Ko akan jadi",
                  date: "2025 September 10 22:20",
                  performance: "10/10 performance",
                  followers: "113.7K followers",
                  excerpt:
                    "Selama Koe Benar, Koe Tara Perlu Takut, sekalipun koe disalahin percayalah di hasil akhir Ko akan jadi Pemenangnya ✊ . . . # freewestpapua...",
                  type: "popular",
                },
                {
                  title:
                    "BRO SATRIA'S SHARP MECHANICAL SKILLS CUT FROZEN TUNA WELL #shorts #fyp #viral #fishcutting #tuna",
                  date: "2025 September 12 04:00",
                  performance: "10/10 performance",
                  followers: "768K followers",
                  excerpt:
                    "l continues to be a source of entertainment and alternative information for all of you. In this video, I invite everyone to watch ,How to Cut Yellowfin Tuna at...",
                  type: "popular",
                },
                {
                  title: "Grok",
                  date: "2025 August 08 19:26",
                  performance: "10/10 performance",
                  followers: "6.4M followers",
                  excerpt:
                    "The indigenous peoples of West Papua fight Indonesia's central government primarily due to historical injustices, including the rigged 1969 Act of Free...",
                  type: "popular",
                },
                {
                  title:
                    "Wow big and fresh yellowfin tuna cutting skills by Uncle Bahar #shorts #fishcutting #tuna #fish",
                  date: "2025 September 14 21:00",
                  performance: "10/10 performance",
                  followers: "768K followers",
                  excerpt:
                    "Fishery Science, Tuna Fisherman, Fish Slicing Video, Blue Tuna, sashimi, fish slices, tuna recipe, tuna slices, fish slices, fish slices, fish washing, tuna stea...",
                  type: "popular",
                },
                {
                  title: "홄홣홙홤홣홚홨홞홖 홝홚홣황홞홠홖홣 홆홚홠홚홧홖홨홖홣",
                  date: "2025 September 12 16:35",
                  performance: "10/10 performance",
                  followers: "113.7K followers",
                  excerpt:
                    "홄홣홙홤홣홚홨홞홖 홝홚홣황홞홠홖홣 홆홚홠홚홧홖홨홖홣 홈홞홡홞황홚홧 혿홞 혽홪홢홞 홒홚홨황 홋홖홥홪홖, 홃홚홣황홞홠홖홣 홄홡홚활홖홡 홇홤활활홞홣활 홙홖홣 홎홚활홚홧홖 홗홪홠홖 홍홪홖홣활 혿홚홢홤홠홧홖홨홞 ...",
                  type: "popular",
                },
                {
                  title: "Grok",
                  date: "2025 September 21 04:53",
                  performance: "10/10 performance",
                  followers: "6.4M followers",
                  excerpt:
                    "I checked ULMWP's official statements. In their Feb 5, 2025 release, Interim President Benny Wenda says: \"Dialogue with Indonesia is not the answer for...",
                  type: "popular",
                },
                {
                  title:
                    "We wish our Papua New Guinea wantoks a safe and happy week celeb 50th of Independence. We hope that when",
                  date: "2025 September 16 02:49",
                  performance: "10/10 performance",
                  followers: "386.4K followers",
                  excerpt:
                    "We wish our Papua New Guinea wantoks a safe and happy week celebrating 50th of Independence. We hope that when West Papua is free from...",
                  type: "popular",
                },
                {
                  author: "Yu Kanazawa",
                  date: "2025 October 13 19:51",
                  performance: "1/10 performance",
                  content:
                    "ガストロコロニアリズム Chao, S. (2021). Gastrocolonialism: The intersections of race, food, and development in West Papua. The...",
                  type: "recent",
                },
                {
                  author: "Yu Kanazawa",
                  date: "2025 October 13 19:45",
                  performance: "6/10 performance",
                  followers: "1.9K followers",
                  content:
                    "ガストロコロニアリズム Chao, S. (2021). Gastrocolonialism: The intersections of race, food, and development in West Papua. The...",
                  type: "recent",
                },
                {
                  author: "Elang",
                  date: "2025 October 13 19:30",
                  performance: "3/10 performance",
                  followers: "139 followers",
                  content:
                    "Menunggu tanggapan para SJW Free West Papua, Kalau kasus kekgini biasanya kebingungan gapunya alibi",
                  type: "recent",
                },
                {
                  author: "West Papua dance at Tabubil #coversong#viralreelsシ",
                  date: "2025 October 13 19:15",
                  performance: "1/10 performance",
                  followers: "22 followers",
                  content: "",
                  type: "recent",
                },
                {
                  author: "Hong Xiuquan",
                  date: "2025 October 13 18:56",
                  performance: "5/10 performance",
                  followers: "565 followers",
                  content:
                    "Indonesian nationalists have been shamelessly larping for Palestine while working against the liberation of oppressed peoples worldwide from Tamil...",
                  type: "recent",
                },
                {
                  author: "Amir Yogi",
                  date: "2025 October 13 17:30",
                  performance: "7/10 performance",
                  followers: "3.8K followers",
                  content:
                    "@aziz0nomics For stopping West Papua, Indonesia will open diplomacy with Israel because West Papua is a Hamas Indonesian an...來",
                  type: "recent",
                },
                {
                  author: "Amir Yogi",
                  date: "2025 October 13 17:29",
                  performance: "7/10 performance",
                  followers: "3.8K followers",
                  content: "Indonesia 欄 Israel West Papua and Palestine as 2 Hamas are out like Visegrad 24 wants.",
                  type: "recent",
                },
                {
                  author: "Amir Yogi",
                  date: "2025 October 13 17:28",
                  performance: "7/10 performance",
                  followers: "3.8K followers",
                  content: "@visegrad24 And also West Papua, no worries.",
                  type: "recent",
                },
                {
                  author: "Amir Yogi",
                  date: "2025 October 13 17:28",
                  performance: "7/10 performance",
                  followers: "3.8K followers",
                  content:
                    "@visegrad24 Indonesia 欄 Israel West Papua and Palestine as 2 Hamas are out like Visegrad 24 wants.",
                  type: "recent",
                },
                {
                  author: "Brad Simpson (bradleyrsimpson.bsky.social)",
                  date: "2025 October 13 17:27",
                  performance: "8/10 performance",
                  followers: "18.8K followers",
                  content:
                    "While I am document dumping, I am posting many of the files from my forthcoming book project on the politics of development and human rights...",
                  type: "recent",
                },
              ].map((mention, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{
                        backgroundColor: mention.type === "popular" ? "#7d5ee5" : "#4cc9f0",
                      }}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      {mention.type === "popular" ? (
                        <>
                          <h4 className="font-semibold text-gray-900 mb-2">{mention.title}</h4>
                          <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-2">
                            <span>📅 {mention.date}</span>
                            <span>⭐ {mention.performance}</span>
                            <span>👥 {mention.followers}</span>
                          </div>
                          <p className="text-sm text-gray-600">{mention.excerpt}</p>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-sm text-gray-900">{mention.author}</span>
                            <span className="text-xs text-gray-500">• {mention.performance}</span>
                            {mention.followers && <span className="text-xs text-gray-500">• {mention.followers}</span>}
                          </div>
                          <p className="text-xs text-gray-500 mb-1">📅 {mention.date}</p>
                          {mention.content && <p className="text-sm text-gray-700">{mention.content}</p>}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Active Influencers</span>
              <span className="text-sm font-normal" style={{ color: "#968ff9" }}>
                SIGMA
              </span>
            </CardTitle>
            <p className="text-sm text-gray-500"></p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">#</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Name</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Platform</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-700">Reach</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-700">Followers</th>
                    <th className="text-center py-3 px-2 font-semibold text-gray-700">Performance</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-700">Voice Share</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-700">Mentions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "freewestpapua.nl",
                      platform: "Web",
                      reach: "37,511,200",
                      followers: "17,088",
                      performance: "8/10",
                      voiceShare: "0%",
                      mentions: "4",
                    },
                    {
                      name: "@grok",
                      platform: "X",
                      reach: "26,412,683",
                      followers: "6,400,630",
                      performance: "10/10",
                      voiceShare: "1.68%",
                      mentions: "158",
                    },
                    {
                      name: "@soulofkhal",
                      platform: "X",
                      reach: "14,141,400",
                      followers: "279",
                      performance: "3/10",
                      voiceShare: "0%",
                      mentions: "1",
                    },
                    {
                      name: "steven_nabire",
                      platform: "Instagram",
                      reach: "14,043,900",
                      followers: "34,408",
                      performance: "8/10",
                      voiceShare: "0.01%",
                      mentions: "4",
                    },
                    {
                      name: "bruuue_",
                      platform: "X",
                      reach: "13,362,600",
                      followers: "5,397",
                      performance: "7/10",
                      voiceShare: "0%",
                      mentions: "2",
                    },
                    {
                      name: "ajibnariman",
                      platform: "TikTok",
                      reach: "11,281,874",
                      followers: "768,000",
                      performance: "10/10",
                      voiceShare: "0.2%",
                      mentions: "141",
                    },
                    {
                      name: "@VeronicaKoman",
                      platform: "X",
                      reach: "8,115,800",
                      followers: "196,188",
                      performance: "10/10",
                      voiceShare: "0.05%",
                      mentions: "19",
                    },
                    {
                      name: "wonderfulid",
                      platform: "Instagram",
                      reach: "7,838,600",
                      followers: "756,023",
                      performance: "10/10",
                      voiceShare: "0.2%",
                      mentions: "3",
                    },
                    {
                      name: "@DEC0L0NIZE",
                      platform: "X",
                      reach: "7,231,582",
                      followers: "9,914",
                      performance: "7/10",
                      voiceShare: "0%",
                      mentions: "8",
                    },
                    {
                      name: "sammy..bee",
                      platform: "TikTok",
                      reach: "6,815,000",
                      followers: "14,370",
                      performance: "8/10",
                      voiceShare: "0%",
                      mentions: "1",
                    },
                  ].map((influencer, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2 font-semibold" style={{ color: "#7d5ee5" }}>
                        {index + 1}
                      </td>
                      <td className="py-3 px-2 font-medium text-gray-900">{influencer.name}</td>
                      <td className="py-3 px-2 text-gray-600">{influencer.platform}</td>
                      <td className="py-3 px-2 text-right text-gray-900">{influencer.reach}</td>
                      <td className="py-3 px-2 text-right text-gray-600">{influencer.followers}</td>
                      <td className="py-3 px-2 text-center">
                        <span
                          className="px-2 py-1 rounded text-xs font-semibold"
                          style={{ backgroundColor: "rgba(76, 201, 240, 0.15)", color: "#4cc9f0" }}
                        >
                          {influencer.performance}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-right font-semibold" style={{ color: "#7d5ee5" }}>
                        {influencer.voiceShare}
                      </td>
                      <td className="py-3 px-2 text-right text-gray-900">{influencer.mentions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Popular Influencers</span>
              <span className="text-sm font-normal" style={{ color: "#968ff9" }}>
                SIGMA
              </span>
            </CardTitle>
            <p className="text-sm text-gray-500"></p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">#</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Name</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Platform</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-700">Followers</th>
                    <th className="text-center py-3 px-2 font-semibold text-gray-700">Performance</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-700">Reach</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-700">Voice Share</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-700">Mentions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "CocaColaPNG",
                      platform: "Instagram",
                      followers: "108,701,051",
                      performance: "10/10",
                      reach: "3,100",
                      voiceShare: "28.46%",
                      mentions: "1",
                    },
                    {
                      name: "pubity",
                      platform: "Instagram",
                      followers: "41,470,143",
                      performance: "10/10",
                      reach: "5,630,000",
                      voiceShare: "10.86%",
                      mentions: "1",
                    },
                    {
                      name: "@Reuters",
                      platform: "X",
                      followers: "25,563,658",
                      performance: "10/10",
                      reach: "49,700",
                      voiceShare: "6.69%",
                      mentions: "2",
                    },
                    {
                      name: "@detikcom",
                      platform: "X",
                      followers: "25,142,911",
                      performance: "10/10",
                      reach: "136,500",
                      voiceShare: "6.58%",
                      mentions: "1",
                    },
                    {
                      name: "ProjectNightfall",
                      platform: "X",
                      followers: "15,657,192",
                      performance: "10/10",
                      reach: "185,200",
                      voiceShare: "4.1%",
                      mentions: "1",
                    },
                    {
                      name: "@ABPNews",
                      platform: "X",
                      followers: "14,289,406",
                      performance: "10/10",
                      reach: "3,500",
                      voiceShare: "3.74%",
                      mentions: "1",
                    },
                    {
                      name: "interestingengine...",
                      platform: "Instagram",
                      followers: "11,050,720",
                      performance: "10/10",
                      reach: "21,000",
                      voiceShare: "2.89%",
                      mentions: "1",
                    },
                    {
                      name: "didyouknowpage1",
                      platform: "Instagram",
                      followers: "8,870,160",
                      performance: "10/10",
                      reach: "17,900",
                      voiceShare: "2.32%",
                      mentions: "1",
                    },
                    {
                      name: "@grok",
                      platform: "X",
                      followers: "6,400,630",
                      performance: "10/10",
                      reach: "26,412,683",
                      voiceShare: "1.68%",
                      mentions: "158",
                    },
                    {
                      name: "skynewsaustralia",
                      platform: "YouTube",
                      followers: "5,940,000",
                      performance: "10/10",
                      reach: "598,566",
                      voiceShare: "1.56%",
                      mentions: "1",
                    },
                  ].map((influencer, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2 font-semibold" style={{ color: "#7d5ee5" }}>
                        {index + 1}
                      </td>
                      <td className="py-3 px-2 font-medium text-gray-900">{influencer.name}</td>
                      <td className="py-3 px-2 text-gray-600">{influencer.platform}</td>
                      <td className="py-3 px-2 text-right text-gray-900">{influencer.followers}</td>
                      <td className="py-3 px-2 text-center">
                        <span
                          className="px-2 py-1 rounded text-xs font-semibold"
                          style={{ backgroundColor: "rgba(76, 201, 240, 0.15)", color: "#4cc9f0" }}
                        >
                          {influencer.performance}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-right text-gray-900">{influencer.reach}</td>
                      <td className="py-3 px-2 text-right font-semibold" style={{ color: "#7d5ee5" }}>
                        {influencer.voiceShare}
                      </td>
                      <td className="py-3 px-2 text-right text-gray-900">{influencer.mentions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Top Countries</span>
              <span className="text-sm font-normal" style={{ color: "#968ff9" }}>
                SIGMA
              </span>
            </CardTitle>
            <p className="text-sm text-gray-500"></p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { country: "Indonesia", mentions: 1465 },
                { country: "Papua New Guinea", mentions: 1139 },
                { country: "United States", mentions: 241 },
                { country: "Australia", mentions: 204 },
                { country: "United Kingdom", mentions: 102 },
                { country: "New Zealand", mentions: 42 },
                { country: "Netherlands", mentions: 40 },
                { country: "Solomon Islands", mentions: 30 },
                { country: "India", mentions: 24 },
                { country: "France", mentions: 24 },
                { country: "Fiji", mentions: 21 },
                { country: "Germany", mentions: 19 },
                { country: "Philippines", mentions: 16 },
                { country: "Cuba", mentions: 16 },
                { country: "Haiti", mentions: 14 },
                { country: "Vanuatu", mentions: 14 },
                { country: "Poland", mentions: 13 },
                { country: "Jamaica", mentions: 13 },
                { country: "Singapore", mentions: 13 },
                { country: "Nigeria", mentions: 13 },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-500">{index + 1}.</span>
                    <span className="font-medium text-gray-900">{item.country}</span>
                  </div>
                  <span className="font-bold" style={{ color: "#7d5ee5" }}>
                    {item.mentions}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-8 border-t border-gray-200 text-sm bg-white">
        © 2025 SIGMA. All rights reserved.
      </footer>
    </div>
  )
}
