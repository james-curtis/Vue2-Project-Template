import { productApiURL } from "@/constants/api-url-constant";
import Mock from "mockjs";
//把JSON数据格式引入进来[JSON数据格式根本没有对外暴露，但是可以引入]
//webpack默认对外暴露的：图片、JSON数据格式

Mock.setup({
  timeout: '100 - 600'
})

Mock.mock(productApiURL.queryPortalBlocks, {})
