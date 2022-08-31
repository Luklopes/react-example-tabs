import { TabItem } from "./Tabitem";
import { TabContent } from "./TabContent";
import {useState} from "react";

const TABS_DATA =[
    {
        key:"tabs1",
        title:" Tab1",
        isActive: true,
        content:"Conteudo 1"
    },
    {
        key:"tabs2",
        title:" Tab2",
        isActive: false,
        content:"Conteudo 2"
    }
    ,
    {
        key:"tabs3",
        title:" Tab3",
        isActive: false,
        content:"Conteudo 3"
    }
];
export const Tabs = () => {
    
    const [tabs,setTabs] = useState(TABS_DATA);
    const handleTabClick = (key) => {
        const newTabs = tabs.map(t => t.key === key ? ({...t, isActive: true}) : ({...t, isActive:false}))
        setTabs(newTabs)
    }

    return (
        <div className = "tab-component">
            <ul>
                {tabs.map(({key,title, isActive})=> (
                <TabItem isActive={isActive} title={title} tabKey={key} onTabClick={handleTabClick}></TabItem>))}
            </ul>
            <div className=" tab-component-content">
              {tabs.map(({content, isActive})=>(
                  isActive && <TabContent>{content}</TabContent>
              ))}
            </div>
        </div>
    );

};