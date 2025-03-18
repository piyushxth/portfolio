import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface RecentActivityProps {
  type: "projects" | "skills" | "experience";
}

export function RecentActivity({ type }: RecentActivityProps) {
  const activities = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      timestamp: "2 hours ago",
      action: "Updated",
    },
    {
      id: 2,
      title: "Portfolio Website",
      timestamp: "1 day ago",
      action: "Created",
    },
    {
      id: 3,
      title: "Mobile App UI",
      timestamp: "3 days ago",
      action: "Updated",
    },
  ];

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center gap-4">
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-primary text-primary-foreground">
              {activity.title.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">{activity.title}</p>
            <p className="text-xs text-muted-foreground">
              {activity.action} {activity.timestamp}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
