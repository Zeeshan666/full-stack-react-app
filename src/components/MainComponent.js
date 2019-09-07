import React, { Component } from 'react'
import Menu from "../components/MenuComponets"
import { actions } from 'react-redux-form';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'
import About from '../components/Aboutus'
import  DishDetail from "../components/DishdetailComponent" 
import {Switch,Route,Redirect,withRouter} from 'react-router-dom'
import ContactComponent from "../components/ContactComponent"
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { postComment, addComment ,fetchLeaders, fetchDishes, fetchComments, fetchPromos  ,postFeedback } from '../redux/ActionCreators';
 const mapStateToProps=(state)=>{
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
 }

 const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => {dispatch(fetchLeaders())},
  postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => {dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message))},
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment))
});
 class Main extends Component {

componentDidMount() {
  this.props.fetchDishes();
  this.props.fetchComments();
  this.props.fetchPromos();
  this.props.fetchLeaders();
  this.props.postFeedback();
}
render() {     
    
    const Homepage =()=>{
return(
   <Home 
dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
dishesLoading={this.props.dishes.isLoading}
dishesErrMess={this.props.dishes.errMess}
promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promoLoading={this.props.promotions.isLoading}
              promoErrMess={this.props.promotions.errMess}

leader = {this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
leadersLoading = {this.props.leaders.isLoading}
          leadersFailed = {this.props.leaders.error}
/>
)  
    }
  
    // const DishWithId = ({match}) => {
    //   return(
    //       <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
    //         comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    //   );
    // };
    
    const DishWithId = ({ match }) => {
      return( 
      <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
    
            postComment={this.props.postComment}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            commentsErrMess={this.props.comments.errMess}
          />
      );
    }

    console.log(this.props.dishes);
    return (
      <div >
    

      <Header/>
      <TransitionGroup>
      <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
        <Switch  location={this.props.location}>

          <Route path='/home' component ={Homepage}/>
          <Route exact path='/menu' component ={()=><Menu dishes ={this.props.dishes}/>}/>
          <Route path='/contactus' component={()=><ContactComponent postFeedback = {this.props.postFeedback} resetFeedbackForm={this.props.resetFeedbackForm} />}  />
          <Route path='/menu/:dishId' component={DishWithId} /> 
          <Route path='/Aboutus' component={()=><About  leaders={this.props.leaders}/>}  />
          <Redirect to="/home"/>
        </Switch>
  
    </CSSTransition>
    </TransitionGroup>
    <Footer/>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main))

