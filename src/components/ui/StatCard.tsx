import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

interface StatCardProps {
  title: string;
  metric: string;
  delta?: string;
  deltaType?: "moderateIncrease" | "moderateDecrease" | "unchanged";
}

export function StatCard({ title, metric, delta, deltaType }: StatCardProps) {
  return (
    <Card className="max-w-xs mx-auto">
      <Flex alignItems="start">
        <div>
          <Text>{title}</Text>
          <Metric>{metric}</Metric>
        </div>
        {delta && <BadgeDelta deltaType={deltaType}>{delta}</BadgeDelta>}
      </Flex>
    </Card>
  );
}