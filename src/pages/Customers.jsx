import React from 'react'
import {GridComponent,ColumnDirective,ColumnsDirective,Page,Search,Inject, Selection, Edit, Sort, Filter, Toolbar} from "@syncfusion/ej2-react-grids"
import {customersData,contextMenuItems,customersGrid} from "../data/dummy"
import {Header} from "../components"

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:m-10 bg-white rounded-3xl'>
      <Header category="page" title="Customers"/>
      <GridComponent
        id="gridcomp"
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{allowEditing:true,allowDeleting:true}}
        width="auto"
        >
        <ColumnsDirective>
          {customersGrid.map((item,index)=><ColumnDirective key={index} {...item}/>)}
          <Inject services={[Page,Search,Toolbar]}/>
        </ColumnsDirective>
      </GridComponent>
    </div>
  )
}

export default Customers