import React from 'react';
import ReactDOM from 'react-dom';

import { Row, Col, Menu, Icon, Form, Input, Button, Modal, Tabs, message } from 'antd';
const FormItem = Form.Item;

export default class Login extends React.Component {

	render() {
		return(
			<Row>
	    		<Col span="2"></Col>
	    		<Col span="8">
	    			<Form>
			            <FormItem label="用户名">
			              {/*getFieldProps是把输入的文本绑定到r_userName上*/}
			              {getFieldDecorator("r_userName")(
			                <Input type="text" placeholder="请输入注册账号"/>
			              )}
			            </FormItem>
			            <FormItem label="密码">
			              {/*getFieldProps是把输入的文本绑定到r_userName上*/}
			              {getFieldDecorator("r_password")(
			                <Input type="password" placeholder="请输入注册密码"/>
			              )}
			            </FormItem>
			            <FormItem label="确认密码">
			              {/*getFieldProps是把输入的文本绑定到r_userName上*/}
			              {getFieldDecorator("r_confirmPassword")(
			                <Input type="password" placeholder="请再次输入注册密码"/>
			              )}
			            </FormItem>
			            <Button type="primary" htmlType="submit">登录</Button>
			        </Form>
	    		</Col>
	    		<Col span="2"></Col>
	    	</Row>
		)
	}
	
}