import React from 'react'
import {Select} from 'antd'

const {Option} = Select

/**
 * 
 * 参数 arrData  [{key:'0',value:'女'}, {key:'1',value:'男'}]
 * 
 * 参数 objData  {0:'女',1:'男'}
 * 
 * 参数arrData与objData 不能同时使用
 * 
 * <BuiSelect placeholder="请选择性别" allowClear={true} arrData={this.state.selectData}/>
 * 
 */
export default class BuiSelect extends React.Component {

  constructor(props) {
    super(props)
  }

  getObjData(){
    let data = this.props.objData
    return (
      <Select {...this.props}>
        {Object.getOwnPropertyNames(data).map(key => <Option key={key}>{data[key]}</Option>)}
      </Select>
    )
  }
  
  getArrData(){
    return (
      <Select {...this.props}>
        {this.props.arrData.map(subData => <Option key={subData.key}>{subData.value}</Option>)}
      </Select>
    )
  }
  
  render() {
    if (this.props.objData){
      return this.getObjData()
    } else {
      return this.getArrData()
    }
  }
}
