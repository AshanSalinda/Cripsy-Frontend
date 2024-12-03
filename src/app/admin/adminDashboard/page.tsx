import DashboardCard from '@/components/Dashboard/DashboardCard';
import React from 'react';
import dashboardData from '@/data/dashboardData.json'; 

function Page() {
    return (
        <div className="p-4 flex flex-wrap gap-4">
            {dashboardData.dashboardCardData.map((card, index) => (
                <DashboardCard
                    key={index}
                    title={card.title}
                    value={card.value}
                    change={card.change}
                    positive={card.positive}
                />
            ))}
        </div>
    );
}

export default Page;
