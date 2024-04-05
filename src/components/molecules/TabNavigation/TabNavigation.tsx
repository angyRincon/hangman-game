import Tab from "@/components/atoms/Tab"
import { TabNavigationContainer, TabNavigationListContainer } from "./TabNavigationStyled"
import { FC } from "react"
import { TabProps } from "./types"

interface TabNavigationProps {
    tabItems: TabProps[]
}

const TabNavigation: FC<TabNavigationProps> = ({ tabItems }) => {
    return (
        <TabNavigationContainer>
            <TabNavigationListContainer>
                {tabItems.map(tab => (
                    <Tab
                        key={tab.id}
                        id={tab.id}
                        label={tab.label}
                    />
                ))}
            </TabNavigationListContainer>
        </TabNavigationContainer>
    )
}
export default TabNavigation