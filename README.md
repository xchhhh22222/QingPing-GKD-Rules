# QingPing GKD Rules · Necy 广告规则补充订阅

这是提供给 **GKD** 使用的远程 JSON5 规则订阅，不需要安装「清屏」APP，也不含安卓程序。

## 在 GKD 中导入

**主订阅链接**（复制完整地址到 GKD → 订阅 → + → 通过链接订阅）：

```text
https://raw.githubusercontent.com/xchhhh22222/QingPing-GKD-Rules/main/necy-gkd.json5
```

手机网络无法连接 GitHub Raw 时，可以先在浏览器尝试以下 CDN 镜像（依赖对应 CDN 的可用性）：

```text
https://fastly.jsdelivr.net/gh/xchhhh22222/QingPing-GKD-Rules@main/necy-gkd.json5
```

```text
https://cdn.jsdelivr.net/gh/xchhhh22222/QingPing-GKD-Rules@main/necy-gkd.json5
```

网络下载超时与规则解析错误是两类问题。确保手机浏览器能访问并看到 JSON 文本，再在 GKD 中导入；若不方便联网，可在浏览器下载 `necy-gkd.json5`，使用 GKD 的本地文件导入功能（若当前版本支持）。

## 规则范围

- v2；订阅 ID：`20261023`
- 包含 **107 条社区历史快照候选规则，涉及 83 个 APP**：其中开屏 18 条、全屏 50 条、局部 39 条。
- 只筛选单节点精确 ID/vid 选择器、保留原 GKD 快照证据，未在当前设备、当前 APP 版本实测。**不能保证跳过全部广告，也不能保证适配性和误触风险为零**。
- 开屏规则默认启用；全屏与局部广告默认关闭，按需启用。若出现误触，先关闭该 APP 的对应规则组。
- 请不要与其它订阅重复开启同一广告的多个点击规则，以免竞争操作。

## 来源与许可

源规则来自 [ganlinte/GKD-subscription](https://github.com/ganlinte/GKD-subscription) MIT 许可版本 v72，定位基准：`4746d192b4c57a4b62ed92a7f5deaf79e64fa811`。保留作者的 [MIT 许可证](./THIRD_PARTY_LICENSE.txt)。

本订阅只对有限候选规则进行整理，不代表上游维护方的官方规则，也不包含 GKD APP 的代码。

## 故障反馈

GKD 出现“下载订阅文件失败 / Socket timeout”：检查网络是否可访问 Raw/CDN，换链接或本地导入。

GKD 显示“解析订阅文件失败”：请保留详细异常信息、GKD 版本、使用的订阅 URL，先确认浏览器打开的是 JSON 而非 `404: Not Found`/HTML。

规则无法关闭广告时：在广告显示时捕获 **GKD 快照**，反馈目标 APP 名称、版本、页面及快照链接，然后进行准确修订；不要盲目加通用“关闭”按钮规则。
