'use client'
import { FC } from "react"
import { TabContainer, TabLabel } from "./TabStyled"
import { usePathname, useSearchParams } from "next/navigation";

interface TabProps {
    id: string;
    label: string
}

const Tab: FC<TabProps> = ({ id, label }) => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const selectedTab = searchParams.get('tab')

    return (
        <TabContainer $isActive={selectedTab === id}>
            <TabLabel href={`${pathname}?tab=${id}`}>
                {label}
            </TabLabel>
        </TabContainer>
    )
}
export default Tab