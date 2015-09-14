/**
 * Created by saiden on 14/09/15.
 */
Meteor.publish("top40", function(){
    return Top40.find({},{limit:10});
});