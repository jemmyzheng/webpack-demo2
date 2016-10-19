import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Form, Input } from 'antd';
import styles from './Login.less';

const createForm = Form.create;
const FormItem = Form.Item;

// 自定义表单校验规则
const FormValidator = {
  userExists(rule, value, callback) {
    if (!value) {
      callback();
    } else {
      setTimeout(() => {
        if (value !== 'Admin') {
          callback([new Error('不存在的用户')]);
        } else {
          callback();
        }
      }, 800);
    }
  },
};
// 登录表单基础组件
class LoginFormBase extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleReset(e) {
    e.preventDefault();
    this.props.form.resetFields();
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((errors) => {
      if (errors) {
        return;
      }
    });
  }
  render() {
    const { getFieldDecorator, getFieldError, isFieldValidating } = this.props.form;
    return (
      <Form vertical>
        <FormItem
          wrapperCol={{ span: 24 }}
          label="登录名"
          hasFeedback
          help={isFieldValidating('name') ? '验证中...' : (getFieldError('name') || []).join(', ')}
        >
          {getFieldDecorator('name', {
            rules: [
              { required: true, min: 5, message: '请输入正确的用户名' },
              { validator: FormValidator.userExists },
            ],
          })(<Input placeholder="邮箱／会员名" />)}
        </FormItem>
        <FormItem
          wrapperCol={{ span: 24 }}
          label="密码"
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, whitespace: true, message: '请输入密码' }],
          })(<Input placeholder="登录密码" />)}
        </FormItem>
        <FormItem wrapperCol={{ span: 24 }}>
          <Button style={{ width: '100%' }} type="primary" onClick={this.handleSubmit}>登&nbsp;录</Button>
        </FormItem>
      </Form>
    );
  }
}
LoginFormBase.propTypes = {
  form: PropTypes.any,
};
// 利用Ant.Form的create方法进行封装
const LoginForm = createForm()(LoginFormBase);

// 登录组件
function Login() {
  return (
    <div className={`${styles.content} container`}>
      <div className={styles.form}>
        <LoginForm />
        <Link to="/signUp">前往注册</Link>
      </div>
    </div>
  );
}
export default Login;
