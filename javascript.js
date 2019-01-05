/*function select_topic(topic) {
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
}*/

function complete_topic(topic) {
    topics[topic].completed = true;

    render_complete_case();
    render_next_case();
}

function render_complete_case() {
    html = ''
    Object.keys(topics).forEach(function(topic) {
        if(topics[topic].completed) {
            html += render_topic(topic);
        }
    });
    document.getElementById('complete_skills_case').innerHTML = html;
}


function render_next_case() {
    html = ''
    Object.keys(topics).forEach(function(topic) {
        if(!topics[topic].completed) {
            can_complete = true;
            
            topics[topic].requires.forEach(function(topic) {
                if(!topics[topic].completed) {
                    can_complete = false;
                }
            });
            
            if(can_complete) {
                html += render_topic(topic);
            }
        }
    });
    document.getElementById('next_skills_case').innerHTML = html;
}

function render_topic(topic) {
    topic = topics[topic];
    html =  '<div class="topic" onclick="complete_topic(\''+topic.id+'\')">';
    html += '<div class="title">';
    html += topic.title;
    html += '</div>';
    html += '<div class="description">';
    html += '</div><div class="description">';
    html += topic.description;
    html += '</div>';
    html += '</div>';
    return html;
}

complete_topic('maths');
