import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const Screen = () => {
    const [notifications, setNotifications] = React.useState([
        { id: 0, isTop: true, username: 'Collins Jons', text: 'sent you', dateName: 'Today', date: '10 mins ago', action: 'a friend request.', type: 'send', extraData: '' },
        { id: 1, isTop: false, username: 'Collins Jons', text: 'accepted', dateName: 'Today', date: '10;30 am 12-06', action: 'your friend request.', type: 'accept', extraData: '' },
        { id: 2, isTop: true, username: 'Collins Jons', text: 'share a Task', dateName: 'Yesterday', date: '10;30 am 12-06', action: 'with you.', type: 'task', extraData: 'Group work' },
        { id: 3, isTop: false, username: 'Collins Jons', text: 'share a File', dateName: 'Yesterday', date: '10;30 am 12-06', action: 'with you.', type: 'file', extraData: 'Trip feild.jpeg' },
        { id: 4, isTop: false, username: 'Collins Jons', text: 'share a Budget', dateName: 'Yesterday', date: '10;30 am 12-06', action: `with you.`, type: 'budget', extraData: `this year's budget` },
        { id: 5, isTop: true, username: 'Collins Jons', text: 'share a Task', dateName: 'Last week', date: '10;30 am 12-06', action: 'with you.', type: 'task', extraData: 'Group work ' },
    ])
    const renderHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>All notifications</Text>
                <View style={styles.divider} />
            </View>
        )
    }
    const renderNotificationItem = () => {
        const renderItem = ({ item }) => {
            return (
                <View style={{ marginTop: item.id === 0 ? '0%' : '3%', marginBottom: '1%' }}>
                    {/* render date name */}
                    {item.isTop
                        ?
                        <View style={{ marginBottom: '5%' }}>
                            <Text style={{ color: 'black' }}>{item.dateName}</Text>
                        </View>
                        :
                        <View style={{ marginBottom: '5%' }} />
                    }
                    {/* render main text */}
                    <View style={{ flex: 1, color: 'black' }}>
                        <Text>
                            <Text style={{ fontWeight: 'bold', color: 'black' }}>{item.username}</Text>
                            <Text style={{ color: 'black' }}> {item.text}</Text>
                            <Text style={{ color: '#0164C6', fontWeight: 'bold' }}> {item.extraData}</Text>
                            <Text style={{ color: 'black' }}> {item.action}</Text>
                        </Text>
                    </View>
                    {/* button + time */}
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: '3%', alignItems: 'center' }}>
                        {
                            item.type === 'send'
                                ?
                                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                                    <TouchableOpacity style={[styles.blueButton, { marginRight: '2.5%' }]}>
                                        <Text style={{ color: 'white' }}>
                                            Accept
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.greyButton}>
                                        <Text style={{ color: 'grey' }}>
                                            Decline
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                item.type === 'accept'
                                    ?
                                    <View />
                                    :
                                    <View>
                                        <TouchableOpacity style={styles.blueButton}>
                                            <Text style={{ color: 'white' }}>
                                                Open {item.type}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                        }
                        <Text style={{ color: 'black' }}>{item.date}</Text>
                    </View>
                </View>
            )
        }
        return (
            <FlatList
                data={notifications}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                scrollEnabled={false}
            />
        )
    }
    return (
        <View style={styles.container}>
            {renderHeader()}
            {renderNotificationItem()}
        </View>
    )
}

export default Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
    },
    headerContainer: {
        marginBottom: '3%'
    },
    divider: {
        height: 1,
        borderColor: 'lightgrey',
        borderWidth: 1,
        width: '100%',
        marginTop: 4
    },
    blueButton: {
        backgroundColor: '#0164C6',
        paddingTop: '1%',
        paddingBottom: '1%',
        paddingRight: '4%',
        paddingLeft: '4%',
        alignItems: 'center',
        borderRadius: 4
    },
    greyButton: {
        backgroundColor: 'white',
        paddingTop: '0.5%',
        paddingBottom: '0.5%',
        paddingRight: '4%',
        paddingLeft: '4%',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'grey',

    }
})