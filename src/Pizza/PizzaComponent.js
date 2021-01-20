//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { smallPizza, mediumPizza, largePizza, adults, children } from '../shared/redux/pizza/pizzaAction';
class PizzaComponent extends Component {
    componentDidMount() {
        // console.log("this.props", this.props)
    }

    incrementSmallPizza(count) {
        let numOfPizza = count + 1;
        let numOfChildren = numOfPizza;
        // if (this.props.childrenCount === 0) {
        this.props.smallPizza(numOfPizza);
        this.props.children(numOfChildren);
        // }
    }

    decrementSmallPizza(count) {
        if (count !== 0) {
            let numOfPizza = count - 1;
            let numOfChildren = numOfPizza;
            // if (this.props.adultsCount > 1) {
            //     let numOfAdults = this.props.adultsCount - 1;
            //     let numOfMediumPizza = this.props.mediumPizzaCount - 1;
            //     this.props.smallPizza(numOfPizza);
            //     this.props.mediumPizza(numOfMediumPizza);
            //     if (this.props.largePizzaCount !== 0) {
            //         if (this.props.adultsCount % 2 === 0) {
            //             let numOfLargePizza = this.props.adultsCount / 2;
            //             this.props.largePizza(numOfLargePizza);
            //         }
            //         let numOfAdults = this.props.adultsCount - 2


            //     } else {
            //         this.props.adults(numOfAdults);
            //     }

            // }
            // else {
            this.props.smallPizza(numOfPizza);
            this.props.children(numOfChildren);
            // }
        }
    }

    incrementMediumPizza(count) {
        let numOfPizza = count + 1;
        let numOfAdults = this.props.adultsCount + numOfPizza;
        // if ((this.props.adultsCount == 0 || this.props.adultsCount === this.props.mediumPizzaCount)) {

        this.props.mediumPizza(numOfPizza);
        // this.props.children(numOfChildren);
        this.props.adults(numOfAdults);
        // }
        // else {
        //     let numOfChildren = 2 * numOfPizza;
        //     this.props.mediumPizza(numOfPizza);
        //     this.props.children(numOfChildren);
        // }

    }

    decrementMediumPizza(count) {
        if (count !== 0) {
            let numOfPizza = count - 1;
            let numOfAdults = numOfPizza;
            if (this.props.adultsCount > 1) {
                this.props.adults(numOfAdults);
                this.props.mediumPizza(numOfPizza);
            } else if (this.props.adultsCount == 1 && this.props.childrenCount > 2) {
                let numOfChildren = this.props.childrenCount - 2;
                this.props.children(numOfChildren);
                this.props.mediumPizza(numOfPizza);
            }

        }

    }

    incrementLargePizza(count) {
        let numOfPizza = count + 1;
        let numOfAdults = this.props.adultsCount + 2;
        this.props.largePizza(numOfPizza);
        this.props.adults(numOfAdults);
    }

    decrementLargePizza(count) {
        if (count !== 0) {
            let numOfPizza = count - 1;

            if (this.props.adultsCount > 2) {
                let numOfAdults = this.props.adultsCount - 2;
                this.props.adults(numOfAdults);
                this.props.largePizza(numOfPizza);
            }
            else if (this.props.childrenCount % 4 === 0) {
                let numOfChildren = this.props.childrenCount - 4
                this.props.childrenCount(numOfChildren);
                this.props.largePizza(numOfPizza);
            }
        }

    }

    incrementAdult(count) {
        let numOfAdults = count + 1;
        let numOfPizza = numOfAdults;
        this.props.adults(numOfAdults);
        this.props.mediumPizza(numOfPizza);
    }

    decrementAdult(count) {
        let numOfAdults = count - 1;
        let numOfPizza = numOfAdults;
        this.props.adults(numOfAdults);
        this.props.mediumPizza(numOfPizza);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.headingStyle}>Order <Text style={styles.headingStyleBold}>Pizza</Text></Text>
                <View style={styles.boxContainer}>
                    <View style={styles.pizzaTypes}>
                        <Icon
                            name="pizza"
                            size={20}
                            type="ionicon"
                            color="#1B0283"
                            style={styles.iconStyle}
                        />
                        <Text style={styles.textStyle}>SMALL</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Button
                                buttonStyle={styles.decrementButton}
                                icon={
                                    <Icon
                                        name="remove"
                                        size={20}
                                        color="white"
                                        style={{ fontWeight: "bold" }}
                                    />
                                }
                                onPress={() => this.decrementSmallPizza(this.props.smallPizzaCount)} />
                            <Text style={styles.numberedText}>{this.props.smallPizzaCount}</Text>
                            <Button
                                buttonStyle={styles.incrementButton}
                                icon={
                                    <Icon
                                        name="add"
                                        size={20}
                                        color="white"
                                    />
                                }
                                onPress={() => this.incrementSmallPizza(this.props.smallPizzaCount)} />
                        </View>
                    </View>
                    <View style={styles.pizzaTypes}>
                        <Icon
                            name="pizza"
                            size={28}
                            type="ionicon"
                            color="#1B0283"
                            style={styles.iconStyle}
                        />
                        <Text style={styles.textStyle}>MEDIUM</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Button buttonStyle={styles.decrementButton}
                                icon={
                                    <Icon
                                        name="remove"
                                        size={20}
                                        color="white"
                                    />
                                }
                                onPress={() => this.decrementMediumPizza(this.props.mediumPizzaCount)} />
                            <Text style={styles.numberedText}>{this.props.mediumPizzaCount}</Text>
                            <Button buttonStyle={styles.incrementButton}
                                icon={
                                    <Icon
                                        name="add"
                                        size={20}
                                        color="white"
                                    />
                                }
                                onPress={() => this.incrementMediumPizza(this.props.mediumPizzaCount)} />
                        </View>
                    </View>
                    <View style={styles.pizzaTypes}>
                        <Icon
                            name="pizza"
                            size={35}
                            type="ionicon"
                            color="#1B0283"
                            style={styles.iconStyle}
                        />
                        <Text style={styles.textStyle}>LARGE</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Button buttonStyle={styles.decrementButton}
                                icon={
                                    <Icon
                                        name="remove"
                                        size={20}
                                        color="white"
                                    />
                                }
                                onPress={() => this.decrementLargePizza(this.props.largePizzaCount)} />
                            <Text style={styles.numberedText}>{this.props.largePizzaCount}</Text>
                            <Button buttonStyle={styles.incrementButton}
                                icon={
                                    <Icon
                                        name="add"
                                        size={20}
                                        color="white"
                                    />
                                }
                                onPress={() => this.incrementLargePizza(this.props.largePizzaCount)} />
                        </View>
                    </View>

                    <View style={styles.pizzaTypes}>
                        <Icon
                            name="person"
                            size={20}
                            type="ionicon"
                            color="#1B0283"
                            style={styles.iconStyle}
                        />
                        <Text style={styles.textStyle}>ADULTS</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Button buttonStyle={styles.decrementButton}
                                icon={
                                    <Icon
                                        name="remove"
                                        size={20}
                                        color="white"
                                    />
                                }
                                onPress={() => this.decrementAdult(this.props.adultsCount)} />
                            <Text style={styles.numberedText}>{this.props.adultsCount}</Text>
                            <Button buttonStyle={styles.incrementButton}
                                icon={
                                    <Icon
                                        name="add"
                                        size={20}
                                        color="white"
                                    />
                                }
                                onPress={() => this.incrementAdult(this.props.adultsCount)} />
                        </View>
                    </View>
                    <View style={styles.pizzaTypes}>
                        <Icon
                            name="person"
                            size={20}
                            type="ionicon"
                            color="#1B0283"
                            style={styles.iconStyle}
                        />
                        <Text style={styles.textStyle}>CHILDREN</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Button buttonStyle={styles.decrementButton}
                                icon={
                                    <Icon
                                        name="remove"
                                        size={20}
                                        color="white"
                                    />
                                } />
                            <Text style={styles.numberedText}>{this.props.childrenCount}</Text>
                            <Button buttonStyle={styles.incrementButton}
                                icon={
                                    <Icon
                                        name="add"
                                        size={20}
                                        color="white"
                                    />
                                } />
                        </View>
                    </View>
                </View>
            </SafeAreaView >
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    pizzaTypes: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 30
    },
    headingStyle: {
        color: '#1B0283',
        fontSize: 35,
        fontWeight: "300"
    },
    headingStyleBold: {
        color: '#1B0283',
        fontSize: 35,
        fontWeight: "700",

    },
    decrementButton: {
        borderRadius: 20,
        backgroundColor: '#1B0283',
        marginRight: 20,
    },
    incrementButton: {
        borderRadius: 20,
        backgroundColor: '#BF087A',
        marginLeft: 20
    },
    numberedText: {
        fontSize: 20,
        marginTop: 5,
        color: "grey"
    },
    iconStyle: {
        // marginRight: 40
    },
    textStyle: {
        fontSize: 20,
        color: "grey",
        marginTop: 2
    },
    boxContainer: {
        borderWidth: 1,
        borderColor: "grey",
        paddingBottom: 20
    }
});


const mapStateToProps = (state) => {
    console.log("state", state)
    return { smallPizzaCount, mediumPizzaCount, largePizzaCount, adultsCount, childrenCount } = state.pizza;
}

const mapDispatchToProps = (dispatch) => {
    console.log("ownProps", this.props)
    return {
        // dispatching actions returned by action creators
        smallPizza: (smallPizzaCount) => dispatch(smallPizza(smallPizzaCount)),
        mediumPizza: (mediumPizzaCount) => dispatch(mediumPizza(mediumPizzaCount)),
        largePizza: (largePizzaCount) => dispatch(largePizza(largePizzaCount)),
        adults: (adultsCount) => dispatch(adults(adultsCount)),
        children: (childrenCount) => dispatch(children(childrenCount)),
    };
};

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(PizzaComponent);
