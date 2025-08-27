import { Spin } from 'antd'
import React from 'react'

const Loading = () => {
  return (
    <div style={{ textAlign: 'center', padding: 50 }}>
      <Spin tip='Loading...'>
        <div style={{ padding: 20, background: '#1e1e1e', minHeight: 100 }}>
          <p>Đang tải dữ liệu...</p>
        </div>
      </Spin>
    </div>
  )
}

export default Loading
