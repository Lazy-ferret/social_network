import React from 'react'
import styles from './Users.module.css'

const Users = (props) => {
    
    if (props.users.length === 0) {
 props.setUsers(
        [
            { id: 1, photoUrl: 'https://avatars.mds.yandex.net/i?id=917a834045e48c6adb9417b73e4ad5b4-5234615-images-thumbs&n=13&exp=1', followed: false, fullName: 'Alex', status: 'Hi all', location: { city: 'Moscow', country: 'Russia' } },
            { id: 2, photoUrl: 'https://yandex-images.clstorage.net/Kre4H9206/25aac8IuP6-8/mGCbrHFCNvkUfsx2zNbQkRdvvdyuk409EP5OnMb4WKTY-Dv_QjsX761d6si8JVyfVQSo23hhUaBGXjJDn7rLSYwUWh2VspbpFE4c53xGoCGXnz2d7uOouGFLO8jGHSk1iGg4LKVpQJlqy_0v2yedWkCxba-clRCmID7l1_hP7oyb04gPNQDVGFBv_Naf15NltM3fqs51_Y0FmBiKor0qZZ2dCe4HqXLoOLmd70sXHOqzA47NKgSAl3BKJXbKT2_smDIY_jSBZ-tjHF6lfBajV7YtTjvM9A3d1AvLSJKdmMTtbFrtFHtgiajbn13bpt44gtBN7Cv1E0WTqgRXS0zvT6mB2O7Ekqe5YTws9K01AQZ1XG_avTUuPYX5mmujv7o2_J2qXdUrAsuqm43_-uZ8OWEgrV-5RBBV4ahmJ5qt_vwpkNqsFcH32qB9b1bOtJC256-u6d0mvAzVuBoagt8KhMzduTxHyTPo2uj8nWinPtsDM22MWwTyxFCJhHaZjLyvqLMYnddCdniBDm7HHsZhVrX_v8t_NF4-NAuoSLI8OjcPfaueZBnC-blafT-IlR4603AdLTj0Irdw-FbHm58PnQsyKKw28hQI0x2eRIz1EGV2_b_If5RNLvR4SIiArAmGf5yK3QT7YgnbWB0cOdbviOHTvM1qVyF0wqpV1bnurpzKgmvPVDO2q6AOXwbuJiAFBS6Oa3x3DPzUW8grocz7xRz-SI4W-TDqGwuO3sl07FlhE_8cKyVBNRMb53W6Xu3cC-P5jxTiVIjgXv8m_EXjNeUtzxqvp9yMBCvJ2fHfycTNbZhPNWowaCup3w-bRA-LYoHtzClHU9dS2ZYmOg8e7vmCe5-X0NWYUl4NFG5VIVclzd3ZX1X_T_X6ejuQrxm17B17PHdLgxkKWdwf2oWeSnKzrOzqRkLEoKjXh3pvX6zZMKm-5cNHO4L-HqS-NMPG95yMiy00_18V6gm5k', followed: true, fullName: 'Ksu', status: 'Sport is life!', location: { city: 'Moscow', country: 'Russia' } },
            { id: 3, photoUrl: 'https://avatars.mds.yandex.net/i?id=35b6af7f9c96fcd0a3bbbcd9b39732d5-5583511-images-thumbs&n=13&exp=1', followed: false, fullName: 'Lisa', status: 'Where is Yondu?', location: { city: 'Oktyabrsky', country: 'Russia' } },
            { id: 4, photoUrl: 'https://avatars.mds.yandex.net/i?id=3f8e17e4121faad6357dd71615670f62-5659524-images-thumbs&n=13&exp=1', followed: true, fullName: 'Nickel', status: 'Need more food', location: { city: 'Moscow', country: 'Russia' } },
            { id: 5, photoUrl: 'https://avatars.mds.yandex.net/i?id=9dca059e230694c945b0f6e7b688107d-5858290-images-thumbs&n=13&exp=1', followed: false, fullName: 'Myshka', status: 'Meow', location: { city: 'Moscow', country: 'Russia' } },
        ]
    )
    }
   
    
    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div><img src={user.photoUrl} className={styles.usersPhoto}/></div>
                        <div>
                            {user.followed 
                            ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button> 
                            : <button onClick={() => props.follow(user.id)}>Follow</button>}
                            
                        </div>
                    </span>

                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.city}</div>
                            <div>{user.location.country}</div>
                        </span>
                    </span>
                </div>)
            }

        </div>
    )
}

export default Users

