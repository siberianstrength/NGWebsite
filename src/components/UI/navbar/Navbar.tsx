import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { PieChartOutlined, LineChartOutlined, MessageOutlined, UserOutlined, FileOutlined, TeamOutlined } from '@ant-design/icons';
import { CaretLeftOutlined } from '@ant-design/icons'; // Иконка стрелки для сворачивания

const { Sider } = Layout;

const Navbar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKey, setSelectedKey] = useState<string>('1'); // Стейт для отслеживания выбранного пункта

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={setCollapsed}
            style={{
                backgroundColor: '#ffffff',
                position: 'absolute',
                height: '100vh',
                width: collapsed ? '80px' : '20px',  // Ширина сайдбара
                flexShrink: 1,
                marginTop: -500,
                  // Отключаем сжатие
            }}
            trigger={null} // Убираем стандартную кнопку сворачивания
        >
            {/* Логотип и кнопка сворачивания */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 16px',
                    color: '#333',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    position: 'relative',
                    zIndex: 10,
                }}
            >
                {/* Кнопка сворачивания */}
                <div
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        position: 'absolute',
                        right: '-13px',  // Отступ от правого края
                        top: '60px',  // Отступ сверху (чуть выше "Общие показатели")
                        backgroundColor: '#f0f0f0',  // Цвет фона кнопки
                        borderRadius: '50%',  // Округление кнопки
                        padding: '6px',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 10, // Чтобы кнопка была поверх других элементов
                    }}
                >
                    <CaretLeftOutlined style={{ color: '#888' }} /> {/* Стрелочка серого цвета */}
                </div>
            </div>

            {/* Меню */}
            <Menu
                mode="inline"
                selectedKeys={[selectedKey]}
                onClick={({ key }) => setSelectedKey(key)} // Для выделения выбранной категории
                style={{
                    backgroundColor: '#ffffff',
                    color: '#333',
                    fontWeight: '500',
                    paddingTop: '20px',
                    paddingLeft: 0, // Убираем отступ слева
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start', // Все элементы выравниваются по левому краю
                }}
            >
                <Menu.SubMenu
                    key="1"
                    title="Общие показатели"
                    icon={<PieChartOutlined />}
                    style={{ width: '100%' }} // Занимает всю ширину меню
                >
                    <Menu.Item key="1-1" icon={<LineChartOutlined />} style={{ textAlign: 'left', fontSize: '13px' }}>
                        Еженедельная статистика
                    </Menu.Item>
                    <Menu.Item key="1-2" icon={<MessageOutlined />} style={{ textAlign: 'left', fontSize: '13px' }}>
                        Сообщения
                    </Menu.Item>
                    <Menu.Item key="1-3" icon={<UserOutlined />} style={{ textAlign: 'left', fontSize: '13px' }}>
                        Пользователи
                    </Menu.Item>
                    <Menu.Item key="1-4" icon={<MessageOutlined />} style={{ textAlign: 'left', fontSize: '13px' }}>
                        Ответы
                    </Menu.Item>
                </Menu.SubMenu>

                <Menu.Item
                    key="2"
                    icon={<FileOutlined />}
                    style={{ fontSize: '14px', textAlign: 'left' }}
                >
                    535-пп
                </Menu.Item>

                <Menu.Item
                    key="3"
                    icon={<TeamOutlined />}
                    style={{ fontSize: '14px', textAlign: 'left' }}
                >
                    Работа модерации
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Navbar;
