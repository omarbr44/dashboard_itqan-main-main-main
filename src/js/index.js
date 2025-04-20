import { Card, DashBox, OrderBox } from "./atoms";
import { Header, Layout, Sidebar } from "./layout";
import { Steper, Table } from "./shared";
import './atoms/apexChart/index'

// * Layout
customElements.define('main-header', Header);
customElements.define('main-sidebar', Sidebar);
customElements.define('main-layout', Layout);


// * Shared 
customElements.define('page-steper', Steper);
customElements.define('table-builder', Table);

// * Atoms
customElements.define('dash-box', DashBox);
customElements.define('order-box', OrderBox);
customElements.define('card-box', Card);
