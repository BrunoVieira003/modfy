'use client'

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { createContext, ReactNode, useContext } from "react"

interface contextType{ currentTab: string | null, defaultTab: string, queryKey: string }

const TabsContext = createContext<contextType>({
    currentTab: '',
    defaultTab: '',
    queryKey: ''
})

interface TabsProps{
    children: ReactNode
    defaultTab: string
    queryKey?: string
}

export function Tabs(props: TabsProps){
    const { children, defaultTab, queryKey } = props
    const key = queryKey || 'tab'
    const query = useSearchParams()
    const tab = query.get(key)

    return (
    <TabsContext.Provider 
    value={{
        currentTab: tab,
        defaultTab: defaultTab,
        queryKey: key
    } }>
        {children}
    </TabsContext.Provider>
    )
}

interface TabProps{
    children: ReactNode
    tab: string
}

export function Tab(props: TabProps){
    const {children, tab} = props
    const { currentTab, defaultTab } = useContext(TabsContext)

    if(tab === currentTab || (!currentTab && tab === defaultTab)) return children;
}

interface TabLinkProps{
    children: ReactNode
    tabRef: string

}
export function TabLink(props: TabLinkProps){
    const {children, tabRef} = props
    const {currentTab, defaultTab, queryKey} = useContext(TabsContext)

    return (
        <Link
        href={{query: { [queryKey]: tabRef } }}
        replace
        className="flex flex-row items-center justify-between data-[active=true]:border-black border-b-2 border-transparent w-fit"
        data-active={tabRef === currentTab || (!currentTab && tabRef === defaultTab)}
        >
            {children}
        </Link>
    )
}