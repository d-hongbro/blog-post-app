exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      // 'mongodb://localhost/blogPosts';
                      'mongodb://admin:thisissimple123@ds149905.mlab.com:49905/hongbro-blog-app';
exports.PORT = process.env.PORT || 8080;