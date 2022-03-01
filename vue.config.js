module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/week6-deploy/' // 資料夾路徑、儲存名稱
    : '/'
}
