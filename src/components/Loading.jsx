import { Spin } from 'antd'
import React from 'react'

const Loading = () => {
  return (
    <div style={{ textAlign: 'center', padding: 50 }}>
      <Spin></Spin>
    </div>
  )
}

export default Loading
