import React from 'react'
import styles from './Block1.module.scss'
import { Col, Row, Space, Typography } from 'antd'
const { Title } = Typography

export const Block1 = () => {
  return (
    <Row justify={'center'} className={styles.image}>
      <Col xs={23} md={20} style={{ alignSelf: 'center' }}>
        <Row gutter={[20, 20]}>
          <Col md={12} xs={24}>
            <Space direction={'vertical'}>
              <Title className={styles.title}>Название проекта</Title>
              <Title level={3} className={styles.subtitle}>
                Второй заголовок
              </Title>
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

Block1.displayName = 'Block1'

export default Block1
