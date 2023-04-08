import React from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd';

import { UserOutlined, LockOutlined } from '@ant-design/icons';

function Register() {


    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
                <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">




                    <div className="relative mt-10 h-px bg-gray-300">
                        <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                            <span className="bg-white px-4 text-xs text-gray-500 uppercase">HOẶC ĐĂNG NHẬP VỚI TÊN NGƯỜI DÙNG</span>
                        </div>
                    </div>
                    <div className="mt-10">
                        <Form>
                            <label for="UserName" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Tài khoản:</label>
                            <Form.Item name="taiKhoan" rules={[{ required: true, message: 'Vui lòng nhập tên người dùng!' }]}>
                                <Input className='text-sm sm:text-base placeholder-gray-500  rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400' prefix={<UserOutlined />} placeholder="UserName" />
                            </Form.Item>

                            <label for="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Mật khẩu:</label>
                            <Form.Item name="matKhau" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>

                                <Input.Password className='text-sm sm:text-base placeholder-gray-500  rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400' prefix={<LockOutlined />} placeholder="Password" />
                            </Form.Item>
                            <div className="flex items-center mb-6 -mt-4">
                                <div className="flex ml-auto">
                                    <a href="#" className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700">Forgot Your Password?</a>
                                </div>
                            </div>
                            <div className="flex w-full">
                                <Button type="primary" htmlType="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">Login</Button>
                            </div>
                        </Form>
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <a href="#" target="_blank" className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
                            <span>
                                <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <span className="ml-2">Create an Account</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
