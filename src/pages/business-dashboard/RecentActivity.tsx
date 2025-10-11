interface RecentActivityProps {
    recentActivities: {
        id: number;
        title: string;
        amount?: string | null;
        time: string;
    }[];
}

const RecentActivity = ({ recentActivities }: RecentActivityProps) => {
    return (
        <ul className="space-y-5">
            {recentActivities.map((activity) => (
                <li
                    key={activity.id}
                    className="border-b border-gray-100 pb-4 flex justify-between items-start"
                >
                    <div>
                        <p className="font-medium text-gray-800">{activity.title}</p>
                        {activity.amount && (
                            <p className="text-blue-700 font-semibold text-sm">
                                {activity.amount}
                            </p>
                        )}
                        <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default RecentActivity;