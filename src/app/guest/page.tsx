import React from "react";
import { Heading, Flex, Text, Button, Column, Row, Schema, Badge, RevealFx } from "@once-ui-system/core";
import { baseURL, routes } from "@/resources/once-ui.config";
import { guest, person } from "@/resources/content";

export default function GuestPortal() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={guest.path}
        title={guest.title}
        description={guest.description}
        image={`/api/og/generate?title=${encodeURIComponent(guest.title)}`}
        author={{ name: person.name, url: `${baseURL}`, image: `${baseURL}${person.avatar}` }}
      />
      <Column fillWidth paddingY="24" gap="m">
        <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
          <Heading wrap="balance" variant="display-strong-l">Guest Portal 原型</Heading>
        </RevealFx>
        <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="16">
          <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
            覆盖在线入住、数字钥匙、服务工单、餐饮预约、活动报名与礼宾对话
          </Text>
        </RevealFx>
      </Column>

      <Flex fillWidth gap="24" mobileDirection="column">
        <Column flex={1} gap="12" padding="16" background="page" border="neutral-alpha-weak" radius="m-4" shadow="l">
          <Row horizontal="space-between" vertical="center">
            <Heading as="h2" variant="display-strong-xs">入住状态</Heading>
            <Badge background="brand-alpha-weak" onBackground="neutral-strong" textVariant="label-default-s">未入住</Badge>
          </Row>
          <Text onBackground="neutral-weak">证件与人脸校验、押金支付与协议签署</Text>
          <Flex gap="8">
            <Button variant="primary" size="m" href="#">开始在线入住</Button>
            <Button variant="secondary" size="m" href="#">人工协助</Button>
          </Flex>
        </Column>

        <Column flex={1} gap="12" padding="16" background="page" border="neutral-alpha-weak" radius="m-4" shadow="l">
          <Row horizontal="space-between" vertical="center">
            <Heading as="h2" variant="display-strong-xs">数字钥匙</Heading>
            <Badge background="brand-alpha-weak" onBackground="neutral-strong" textVariant="label-default-s">A-302</Badge>
          </Row>
          <Text onBackground="neutral-weak">近场解锁与二维码开门的交互原型</Text>
          <Flex gap="8">
            <Button variant="primary" size="m">近场解锁</Button>
            <Button variant="secondary" size="m">扫码开门</Button>
          </Flex>
        </Column>
      </Flex>

      <Flex fillWidth gap="24" mobileDirection="column">
        <Column flex={1} gap="12" padding="16" background="page" border="neutral-alpha-weak" radius="m-4" shadow="l">
          <Heading as="h2" variant="display-strong-xs">客房服务</Heading>
          <Text onBackground="neutral-weak">加床品、清洁、夜床与报修</Text>
          <Flex gap="8" wrap>
            <Button variant="secondary" size="s">加床品</Button>
            <Button variant="secondary" size="s">清洁</Button>
            <Button variant="secondary" size="s">夜床</Button>
            <Button variant="secondary" size="s">报修</Button>
          </Flex>
        </Column>
        <Column flex={1} gap="12" padding="16" background="page" border="neutral-alpha-weak" radius="m-4" shadow="l">
          <Heading as="h2" variant="display-strong-xs">餐饮预约与点餐</Heading>
          <Text onBackground="neutral-weak">浏览餐厅与菜单、预约时段并下单</Text>
          <Flex gap="8" wrap>
            <Button variant="secondary" size="s">预约餐厅</Button>
            <Button variant="secondary" size="s">菜单点餐</Button>
          </Flex>
        </Column>
      </Flex>

      <Flex fillWidth gap="24" mobileDirection="column">
        <Column flex={1} gap="12" padding="16" background="page" border="neutral-alpha-weak" radius="m-4" shadow="l">
          <Heading as="h2" variant="display-strong-xs">活动与礼宾</Heading>
          <Text onBackground="neutral-weak">瑜伽、徒步、品酒报名；与私人礼宾对话</Text>
          <Flex gap="8" wrap>
            <Button variant="secondary" size="s">活动列表</Button>
            <Button variant="secondary" size="s">礼宾对话</Button>
          </Flex>
        </Column>
        <Column flex={1} gap="12" padding="16" background="page" border="neutral-alpha-weak" radius="m-4" shadow="l">
          <Heading as="h2" variant="display-strong-xs">账单与发票</Heading>
          <Text onBackground="neutral-weak">查看消费、分账与支付，开具发票</Text>
          <Flex gap="8" wrap>
            <Button variant="secondary" size="s">账单总览</Button>
            <Button variant="secondary" size="s">支付与发票</Button>
          </Flex>
        </Column>
      </Flex>
    </Column>
  );
}