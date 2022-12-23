import { resolve } from 'path'
import { defineConfig, ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// 支持 html 配置
import { createHtmlPlugin } from 'vite-plugin-html'
export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, __dirname)
  const title = env.VITE_APP_TITLE //index.html头部标签
  const isServe = mode === 'production'
  return {
    base: env.VITE_PUBLIC_PATH,//项目配置二级访问目录
    plugins: [
      vue(),
      //需要注入 index.html ejs 模版的数据
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: title,
          },
        },
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(__dirname, "svgs")],
        // 指定symbolId格式
        symbolId: "lm-[dir]-[name]",
      }),
    ],
    server: {
      host: '0.0.0.0', // 监听所有地址
      hmr: true, //热更新
      port: 7410,//端口
      https: false,// 是否开启 https
      open: true,//服务启动时是否自动打开浏览器
      cors: true,// 允许跨域
      proxy: { // 自定义代理规则
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),//定义路径别名为@
        '@style': resolve(__dirname, 'src/style'),
        '@utils': resolve(__dirname, 'src/utils'),
        '@api': resolve(__dirname, 'src/api'),
        '@components': resolve(__dirname, 'src/components'),
        '@admin': resolve(__dirname, 'src/admin'),
        '@web': resolve(__dirname, 'src/web'),
      }
    },
    esbuild: {
      // 删除console和debugger
      pure: isServe ? ['console.log', 'debugger'] : []
    },
    build: {
      outDir: env.VITE_PROJECT_FILE, //指定输出路径
      // 设置最终构建的浏览器兼容目标
      target: 'es2015',
      // 构建后是否生成 source map 文件
      sourcemap: false,
      //  chunk 大小警告的限制（以 kbs 为单位）
      chunkSizeWarningLimit: 2000,
      // 启用/禁用 gzip 压缩大小报告
      reportCompressedSize: false,
    },
  }

})
