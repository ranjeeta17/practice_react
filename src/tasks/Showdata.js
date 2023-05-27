import React, { Component } from 'react'

export default class Showdata extends Component {
    render() {
        return (
            <div>
                <h1>Show Data:</h1>
                {this.props.arr.map((item, index) => (
                    <div key={index}>
                        <tr>
                            <th>Email
                                <td>
                                {item.email}
                                </td>
                            </th>

                            <th>Password
                                <td>
                                {item.password}
                                </td>
                            </th>
                        </tr>

                        {/* <p>Email: {item.email}</p>
                        <p>Password: {item.password}</p> */}
                    </div>
                ))}
            </div>
        )
    }
}