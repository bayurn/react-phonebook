import React from 'react'

const Phone = (props) => {
    return (
        <tr>
            <th scope="row">{props.name}</th>
            <td>{props.phone}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={props.sent ? props.onDelete : props.resend}>
                    {props.sent ? 'Hapus' : 'Kirim Ulang'}
                </button>
            </td>
            {!props.sent &&
                <td style={{ color: "red", fontSize: "8-x" }}>
                    Network failed, please check your connections
                </td>
            }
        </tr>
    )
}

export default Phone;