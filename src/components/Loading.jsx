import { Spin } from 'antd'
import React from 'react'

const Loading = () => {
  return (
    <div style={{ textAlign: 'center', padding: 50 }}>
      <Spin size='large' tip='Đang tải...' />
    </div>
  )
}

export default Loading
