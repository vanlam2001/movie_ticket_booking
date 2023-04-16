import React, { Component } from 'react'
import { connect } from 'react-redux'
import { stateGhe } from './stateGhe';


class HangGhe extends Component {
    renderHangGhe = () => {


        return (
            <div className='mb-4'>
                <span style={{ color: 'white', fontWeight: '900', fontSize: '20px' }} className='mr-5'>{hang}</span>
                {danhSachGhe.map((ghe, index) => {
                    return <span key={index} style={{ cursor: 'pointer' }} className={stateGhe(ghe.daDat)}>{ghe.soGhe}</span>
                })}
            </div>
        )

    }


    render() {
        return (
            <div className="container p-5">
                <h2 className='text-center text-danger mb-5'>Danh Sách ghế ngồi</h2>
                {this.renderHangGhe()}
            </div>

        )
    }
}



let mapDispatchToProps = (dispatch) => {
    return {
        handleChonGhe: (ghe) => {
            const action = {
                type: "CHON_GHE",
                ghe
            }
            dispatch(action);
        }
    }
}

let mapStateToProps = (state) => {
    return { dataGhe: state.gheReducer.dataGhe }
}




export default connect(mapDispatchToProps, mapStateToProps)(HangGhe);