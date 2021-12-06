const { Before } = require("cucumber");

Before({ tags: "@elasticsearchservice" }, function (scenario, callback) {
  const { ElasticsearchService } = require("../../../clients/client-elasticsearch-service");
  this.service = new ElasticsearchService({});
  callback();
});
