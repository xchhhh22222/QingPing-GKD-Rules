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


## v3（2026-10-23）：针对 QQ 浏览器与荣耀浏览器开屏广告

根据用户提供的 QQ 浏览器开屏广告截图（右上角显示“跳过 3”）及社区已有快照，补充以下 **APP 专用** 规则：

- **QQ 浏览器 `com.tencent.mtt`**：社区已有“跳过”控件规则 + “跳过 3 / 跳过3 / 跳过”文本和描述补漏。开屏组默认启用。
- **荣耀自带浏览器（百度定制版）`com.hihonor.baidu.browser`**：使用社区最新快照关联的开屏广告控件选择器，再补充倒计时文本匹配。开屏组默认启用。
- **新版荣耀浏览器 `com.honor.browser`**：荣耀官方确认的另一包名；缺少实际 GKD 快照，**默认禁用**，需确认设备上确有该 APP 再启用。
- **华为浏览器 `com.huawei.browser`**：仅作包名兼容，**默认禁用**，避免误把荣耀新浏览器和华为浏览器混为一谈。

**安全限制：** 所有规则都只在打开对应 APP 后前 10 秒内有效，最多触发一次；倒计时文本只匹配“跳过”、后面可带 0—2 位数字的形式，并限制可视尺寸，不会匹配“跳过教程”“跳过片头”等长文本。注意，这不证明能处理纯图像或隐藏无障碍节点的广告。

**来源/参考快照：**
- QQ 浏览器社区规则：https://github.com/Lin-arm/GKD_subscription/blob/main/src/apps/com.tencent.mtt.ts，原快照 https://i.gkd.li/i/12472630
- 荣耀百度定制版社区规则：https://github.com/Lin-arm/GKD_subscription/blob/main/src/apps/com.hihonor.baidu.browser.ts，原快照 https://i.gkd.li/i/32739487
- 华为浏览器社区规则：https://github.com/Lin-arm/GKD_subscription/blob/main/src/apps/com.huawei.browser.ts，原快照 https://i.gkd.li/i/13403785
- 荣耀浏览器包名说明：https://developer.honor.com/cn/kitdoc/content/11106/guides/themetool.md

**如仍然没有跳过**，优先核实 GKD 订阅是否启用、无障碍服务是否运行、对应 APP 的真实包名，并提供广告画面的 **GKD 快照链接**。普通手机截图只能证明按钮可见，不能证明无障碍控件提供了什么 text/desc/id/clickable 属性。

GKD → 订阅 → 此订阅 → 更新即可获取 v3；同一个 URL 不需要删除重加。更新后进入对应 APP 的规则列表确认该规则组开关和动作记录。
