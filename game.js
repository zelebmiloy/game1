/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    AsyncStorage,
    TouchableHighlight,
    Alert

} from 'react-native';


var timeLimit = 10;
const STORAGE_KEY = '@MyApp:key'
var flow = React.createClass({
    if (this.props.show) {
            return (
                <TouchableHighlight onPress={this.props.onPress} style={styles.touch}>
                    <Text style={styles.sakura}>🌸</Text>
                </TouchableHighlight>
            )
        } else {
            return (
                <Text></Text>
            )
        }
    }
})
export default class game extends Component {
    constructor() {
        super()
        this.state = {
            highScore: 0,
            timeCount: 0,
            score: 0,
            playing: false,
            holes: [false, false, false, false, false, false, false, false, false]
        }
        this._startGame = this._startGame.bind(this)
    }
    componentDidMount() {
        AsyncStorage.getItem(STORAGE_KEY)
            .then((data) => {
                if (data == null) {
                    data = 0
                } else {
                    this.setState({
                        highScore: parseInt(data),
                    })
                }
 
            }
            )
    }
    _addScore() {
        this.setState({ score: this.state.score + 1 })
    }
    _startGame() {
        this.setState({
            timeCount: timeLimit,
            playing: true,
            score: 0
        })
        sakuraTimer = setInterval(() => {
            var currentHoles = this.state.holes;
            currentHoles[Math.floor(Math.random() * 9)] = true;
            if (!Math.floor(Math.random() * 3)) {
                currentHoles = [false, false, false, false, false, false, false, false, false]
            }
            this.setState({
                holes: currentHoles
            });
        }, 500)
        timer = setInterval(() => {
            this.setState({
                timeCount: this.state.timeCount - 1,


})
            if (this.state.timeCount == 0) {
                this._stopGame()
            }
        }, 1000)
    }
    _stopGame() {
        clearInterval(timer)
        clearInterval(sakuraTimer)
 
        this.setState({
            playing: false,
            holes: [false, false, false, false, false, false, false, false, false]
        })
        if (this.state.score > this.state.highScore) {
            Alert.alert(
                'New high score !!!',
                'you make a new high score',
                [
 
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
            )
            this.setState({
                highScore: this.state.score,
            })
        }
        AsyncStorage.setItem(STORAGE_KEY, '' + this.state.highScore);
    }
    _handleTouch(holeNumber) {
        var currentHoles = this.state.holes;
        currentHoles[holeNumber] = false;
        this.setState({
            score: this.state.score + 1,
            holes: currentHoles,
 
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
 
                    <View style={styles.highScore}>
                        <Text style={styles.headerNumber}>High Score</Text>
                        <Text style={styles.number}>{this.state.highScore}</Text>
                    </View>
 
                    <View style={styles.timeCount}>
                        <Text style={styles.headerNumber}>Time</Text>
                        <Text style={styles.number}>{this.state.timeCount}</Text>
                    </View>
                    <View style={styles.currentScore}>
                        <Text style={styles.headerNumber}>Score</Text>
                        <Text style={styles.number}>{this.state.score}</Text>
                    </View>
                </View>
                <View style={styles.gameContent}>
                    <View style={styles.holeRow}>
 
                        <View style={styles.holeColumn}>
 
                            <flow show={this.state.holes[0]} onPress={() => this._handleTouch(0)} />
 
                        </View>
 
                        <View style={styles.holeColumn}>
                            <View style={styles.hole}>
                                <flow show={this.state.holes[1]} onPress={() => this._handleTouch(1)} />
                            </View>
                        </View>
                        <View style={styles.holeColumn}>
                            <View style={styles.hole}>
                                <flow show={this.state.holes[2]} onPress={() => this._handleTouch(2)} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.holeRow}>
                        <View style={styles.holeColumn}>
                            <View style={styles.hole}>
                                <flow show={this.state.holes[3]} onPress={() => this._handleTouch(3)} />
                            </View>
                        </View>
                        <View style={styles.holeColumn}>
                            <View style={styles.hole}>
                                <flow show={this.state.holes[4]} onPress={() => this._handleTouch(4)} />
                            </View>
                        </View>
                        <View style={styles.holeColumn}>
                            <View style={styles.hole}>
                                <flow show={this.state.holes[5]} onPress={() => this._handleTouch(5)} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.holeRow}>
                        <View style={styles.holeColumn}>
                            <View style={styles.hole}>
                                <flow show={this.state.holes[6]} onPress={() => this._handleTouch(6)} />
                            </View>
                        </View>
                        <View style={styles.holeColumn}>
                            <View style={styles.hole}>
                                <flow show={this.state.holes[7]} onPress={() => this._handleTouch(7)} />
                            </View>
                        </View>
                        <View style={styles.holeColumn}>
                            <View style={styles.hole}>
                                <flow show={this.state.holes[8]} onPress={() => this._handleTouch(8)} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.startGame}>
                    <Button title='Start Game' color='red' onPress={this._startGame} disabled={this.state.playing} />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
     
 
    },
    header: {
        flex: 1,
        flexDirection: 'row',
 
 
    },
    headerNumber: {
     
    },
    number: {
       
    },
    gameContent: {
        flex: 8,
        flexDirection: 'column',
 
    },
    startGame: {
        flex: 1,
 
     
    },
    highScore: {
        flex: 3,
        margin: 5,
        backgroundColor: 'red',
        alignItems: 'center',
       
    },
    timeCount: {
        flex: 2,
        margin: 5,
        backgroundColor: 'red',
        alignItems: 'center',
     
    },
    currentScore: {
        flex: 3,
        margin: 5,
          backgroundColor: 'red',
        alignItems: 'center',
       
    },
    holeRow: {
        flex: 1,
        flexDirection: 'row'
 
    },
    holeColumn: {
        flex: 1,
       
        margin: 10,
        backgroundColor: 'red'
    },
    hole: {
        flex: 1,
        borderRadius: 10,
    },
    sakura: {
        fontSize: 50
    },
    touch: {
        flex: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
 
    }
});
 
module.exports=game;
