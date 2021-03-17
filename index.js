const apiVideo = require('@api.video/nodejs-sdk');
const client = new apiVideo.Client({ apiKey: 'xxx' });

result = client.videos.upload('C:\\Users\\Server\\Downloads\\sample_academy\\category\\file_name.mov', {
    title: 'Course Name - Lesson 1 - Lesson Name',
    mp4Support:false,
    tags: ['Sample Academy', 'Course Name']
});
 result.then(function(video) {
  console.log(video.title);
}).catch(function(error) {
  console.error(error);
});

result = client.videos.upload('C:\\Users\\Server\\Downloads\\sample_academy\\category\\file_name.mp4', {
    title: 'Course Name - Lesson 2 - Lesson Name',
    mp4Support:false,
    tags: ['Sample Academy', 'Course Name']
});
 result.then(function(video) {
  console.log(video.title);
}).catch(function(error) {
  console.error(error);
}); 

result = client.videos.upload('C:\\Users\\Server\\Downloads\\sample_academy\\category\\file_name.mp4', {
  title: 'Course Name - Lesson 2 - Lesson Name',
  mp4Support:false,
  tags: ['Sample Academy', 'Course Name']
});
result.then(function(video) {
console.log(video.title);
}).catch(function(error) {
console.error(error);
}); 

/* etc ...
.
.
.
*/