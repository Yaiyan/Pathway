function select_topic(topic) {
    document.getElementById('from').innerHTML = "";
    document.getElementById('current').innerHTML = "";
    document.getElementById('to').innerHTML = "";

    add_topic(topic, 'current');
    if(topics[topic].requires) {
        topics[topic].requires.forEach(function(sub_topic) {
            add_topic(sub_topic, 'from');
        });
    };
    topics[topic].leads_to.forEach(function(sub_topic) {
        add_topic(sub_topic, 'to');
    });
}

function add_topic(topic, box) {
    html = '<div class="topic" onClick="';
    html += 'select_topic(\''+topic+'\')';
    html += '"><div class="title">';
    html += topics[topic].title;
    html += '</div><div class="description">';
    html += topics[topic].description;
    html += '</div>'
    if(box == 'current') {
        html += '<div class="learn">Learn</div>'
    }
    html += '<div class="status completed_'
    html += !!topics[topic].completed
    if(box == 'current') {
        html += '" onClick="toggle_topic(\''+topic+'\')';
    }
    html += '"></div>';
    html +='</div>';
    document.getElementById(box).innerHTML += html;
}

function toggle_topic(topic) {
    topics[topic].completed = 1-topics[topic].completed;
    select_topic(topic);
}

topics.maths.completed = true;
select_topic('place_value');
