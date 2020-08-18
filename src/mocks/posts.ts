import {Post} from '~/types/postsTypes';

const Posts = () => {
  let posts = [
    {
      id: 1,
      author: 'Mia Polive',
      postDate: '21 de Agosto de 2020',
      tags: ['Ciência'],
      title: 'Lorem Ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra ipsum ac rhoncus pretium. Phasellus est diam, pellentesque sed enim non, finibus molestie erat. Aenean non lectus mauris. Nunc tristique lacus id dolor ornare, mattis imperdiet augue posuere. Cras bibendum porttitor molestie. Duis nec pretium est. Suspendisse facilisis leo purus, non rutrum elit interdum vitae. Vestibulum eleifend viverra dui vitae cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut porttitor orci. Sed lobortis elit sed lobortis vulputate. Proin finibus luctus massa, vitae pulvinar tortor consequat ultricies. Maecenas ac lorem ullamcorper, lacinia magna ut, ultricies lectus. Etiam ut tortor eu ante tincidunt tempor vel eget est. Ut non est sollicitudin, euismod orci non, ullamcorper arcu. Integer ligula risus, luctus laoreet fringilla vitae, posuere sit amet nunc. Nunc ut auctor odio. Praesent nec quam elementum, ullamcorper mauris non, gravida purus. Nam sollicitudin sem eu bibendum pharetra. Duis neque sem, feugiat vitae fringilla ut, viverra eget nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vulputate ut elit eget volutpat. Aenean tempor justo nec lorem ultrices, vitae egestas dui dictum. Maecenas eu elit euismod, aliquam urna id, tincidunt diam. Praesent rutrum auctor sem eget blandit. Etiam sollicitudin arcu elementum tellus suscipit vulputate. Nulla gravida massa quam. Donec et interdum mi. Sed vel ligula eu ante condimentum posuere a ultrices mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur id faucibus tortor, vitae tempor odio. Cras nec neque sollicitudin, interdum nunc ac, rhoncus magna. Morbi interdum dolor ipsum, sit amet scelerisque nunc molestie id. Quisque eu ligula quis mi tempus eleifend.',
      color: 'dddddd',
    },
    {
      id: 2,
      author: 'Mia Polive',
      postDate: '21 de Agosto de 2020',
      tags: ['Astronomia'],
      title: 'Lorem Ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra ipsum ac rhoncus pretium. Phasellus est diam, pellentesque sed enim non, finibus molestie erat. Aenean non lectus mauris. Nunc tristique lacus id dolor ornare, mattis imperdiet augue posuere. Cras bibendum porttitor molestie. Duis nec pretium est. Suspendisse facilisis leo purus, non rutrum elit interdum vitae. Vestibulum eleifend viverra dui vitae cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut porttitor orci. Sed lobortis elit sed lobortis vulputate. Proin finibus luctus massa, vitae pulvinar tortor consequat ultricies. Maecenas ac lorem ullamcorper, lacinia magna ut, ultricies lectus. Etiam ut tortor eu ante tincidunt tempor vel eget est. Ut non est sollicitudin, euismod orci non, ullamcorper arcu. Integer ligula risus, luctus laoreet fringilla vitae, posuere sit amet nunc. Nunc ut auctor odio. Praesent nec quam elementum, ullamcorper mauris non, gravida purus. Nam sollicitudin sem eu bibendum pharetra. Duis neque sem, feugiat vitae fringilla ut, viverra eget nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vulputate ut elit eget volutpat. Aenean tempor justo nec lorem ultrices, vitae egestas dui dictum. Maecenas eu elit euismod, aliquam urna id, tincidunt diam. Praesent rutrum auctor sem eget blandit. Etiam sollicitudin arcu elementum tellus suscipit vulputate. Nulla gravida massa quam. Donec et interdum mi. Sed vel ligula eu ante condimentum posuere a ultrices mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur id faucibus tortor, vitae tempor odio. Cras nec neque sollicitudin, interdum nunc ac, rhoncus magna. Morbi interdum dolor ipsum, sit amet scelerisque nunc molestie id. Quisque eu ligula quis mi tempus eleifend.',
      color: 'dddddd',
    },
    {
      id: 3,
      author: 'Mia Polive',
      postDate: '21 de Agosto de 2020',
      tags: ['Geografia'],
      title: 'Lorem Ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra ipsum ac rhoncus pretium. Phasellus est diam, pellentesque sed enim non, finibus molestie erat. Aenean non lectus mauris. Nunc tristique lacus id dolor ornare, mattis imperdiet augue posuere. Cras bibendum porttitor molestie. Duis nec pretium est. Suspendisse facilisis leo purus, non rutrum elit interdum vitae. Vestibulum eleifend viverra dui vitae cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut porttitor orci. Sed lobortis elit sed lobortis vulputate. Proin finibus luctus massa, vitae pulvinar tortor consequat ultricies. Maecenas ac lorem ullamcorper, lacinia magna ut, ultricies lectus. Etiam ut tortor eu ante tincidunt tempor vel eget est. Ut non est sollicitudin, euismod orci non, ullamcorper arcu. Integer ligula risus, luctus laoreet fringilla vitae, posuere sit amet nunc. Nunc ut auctor odio. Praesent nec quam elementum, ullamcorper mauris non, gravida purus. Nam sollicitudin sem eu bibendum pharetra. Duis neque sem, feugiat vitae fringilla ut, viverra eget nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vulputate ut elit eget volutpat. Aenean tempor justo nec lorem ultrices, vitae egestas dui dictum. Maecenas eu elit euismod, aliquam urna id, tincidunt diam. Praesent rutrum auctor sem eget blandit. Etiam sollicitudin arcu elementum tellus suscipit vulputate. Nulla gravida massa quam. Donec et interdum mi. Sed vel ligula eu ante condimentum posuere a ultrices mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur id faucibus tortor, vitae tempor odio. Cras nec neque sollicitudin, interdum nunc ac, rhoncus magna. Morbi interdum dolor ipsum, sit amet scelerisque nunc molestie id. Quisque eu ligula quis mi tempus eleifend.',
      color: 'dddddd',
    },
    {
      id: 4,
      author: 'Mia Polive',
      postDate: '21 de Agosto de 2020',
      tags: ['Exatas'],
      title: 'Lorem Ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra ipsum ac rhoncus pretium. Phasellus est diam, pellentesque sed enim non, finibus molestie erat. Aenean non lectus mauris. Nunc tristique lacus id dolor ornare, mattis imperdiet augue posuere. Cras bibendum porttitor molestie. Duis nec pretium est. Suspendisse facilisis leo purus, non rutrum elit interdum vitae. Vestibulum eleifend viverra dui vitae cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut porttitor orci. Sed lobortis elit sed lobortis vulputate. Proin finibus luctus massa, vitae pulvinar tortor consequat ultricies. Maecenas ac lorem ullamcorper, lacinia magna ut, ultricies lectus. Etiam ut tortor eu ante tincidunt tempor vel eget est. Ut non est sollicitudin, euismod orci non, ullamcorper arcu. Integer ligula risus, luctus laoreet fringilla vitae, posuere sit amet nunc. Nunc ut auctor odio. Praesent nec quam elementum, ullamcorper mauris non, gravida purus. Nam sollicitudin sem eu bibendum pharetra. Duis neque sem, feugiat vitae fringilla ut, viverra eget nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vulputate ut elit eget volutpat. Aenean tempor justo nec lorem ultrices, vitae egestas dui dictum. Maecenas eu elit euismod, aliquam urna id, tincidunt diam. Praesent rutrum auctor sem eget blandit. Etiam sollicitudin arcu elementum tellus suscipit vulputate. Nulla gravida massa quam. Donec et interdum mi. Sed vel ligula eu ante condimentum posuere a ultrices mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur id faucibus tortor, vitae tempor odio. Cras nec neque sollicitudin, interdum nunc ac, rhoncus magna. Morbi interdum dolor ipsum, sit amet scelerisque nunc molestie id. Quisque eu ligula quis mi tempus eleifend.',
      color: 'dddddd',
    },
  ];

  let aux: Array<Post> = [];

  posts.map((post) => {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    color.length === 6 ? color : (color = post.color);
    aux.push({...post, color});
  });

  return aux;
};

export {Posts};
