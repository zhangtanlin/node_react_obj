import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

export default class Index extends React.Component {
	
	constructor(){
		super();
		this.state = {
		    collapsed: false
		};
	}
	
	toggle(){
		this.setState({collapsed: !this.state.collapsed});
	}
	
	
	render() {
		return(
			
			<Layout>
		        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
		          	<div className="logo" />
	          		<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
	            		<Menu.Item key="1">
	              			<Icon type="user" />
	              			<span>nav 1</span>
	            		</Menu.Item>
	            		<Menu.Item key="2">
	              			<Icon type="video-camera" />
	              			<span>nav 2</span>
	            		</Menu.Item>
	            		<Menu.Item key="3">
			              	<Icon type="upload" />
			              	<span>nav 3</span>
	            		</Menu.Item>
	          		</Menu>
		        </Sider>
		        <Layout>
		          	<Header style={{ background: '#fff', padding: 0 }}>
		            	<Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle}/>
		          	</Header>
		          	<Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
		            	Content
		          	</Content>
		        </Layout>
		    </Layout>
			
//			<div>
//      		<Link to='/login'>登录吧亲</Link>
//      		一个人首先得有梦想，必须得把这个目标化成你当前行动的一些小的目标, 在一个小的台阶上逐步逐步的往前走，他总是向上发展的，他总是健康的，他总是心情感到愉悦的
//    		</div>
		);
	}
}