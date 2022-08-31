export const TabItem = ({title, isActive, tabKey,onTabClick}) =>(
    <li onClick={()=>onTabClick(tabKey)} className = {isActive? 'tab-active':''}>
        {title}
    </li>
);