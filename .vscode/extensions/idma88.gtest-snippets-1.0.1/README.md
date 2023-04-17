# Google Test snippets for Visual Studio Code

[![License](https://img.shields.io/github/license/idma88/gtest-snippets?style=for-the-badge)](https://github.com/idma88/gtest-snippets/blob/main/LICENSE)
[![VS Code Marketplace Version](https://vsmarketplacebadge.apphb.com/version-short/idma88.gtest-snippets.svg?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=idma88.gtest-snippets)
[![VS Code Marketplace Downloads](https://vsmarketplacebadge.apphb.com/downloads-short/idma88.gtest-snippets.svg?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=idma88.gtest-snippets)
[![VS Code Marketplace Installs](https://vsmarketplacebadge.apphb.com/installs-short/idma88.gtest-snippets.svg?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=idma88.gtest-snippets)

This extension adds snippets for Google Test into Visual Studio Code.

## Features

The following snippets are available:

### Testing
* `TEST`
* `TEST_F`
* `TEST_P`
* `INSTANTIATE_TEST_SUITE_P`
  * `Range`
  * `Values`
  * `ValuesIn`
  * `ValuesIn`
  * `Bool`
  * `Combine`
* `TYPED_TEST_SUITE`
* `TYPED_TEST`
* `TYPED_TEST_SUITE_P`
* `TYPED_TEST_P`
* `REGISTER_TYPED_TEST_SUITE_P`
* `INSTANTIATE_TYPED_TEST_SUITE_P`
* `FRIEND_TEST`
* `SCOPED_TRACE`
* `GTEST_SKIP`
* `GTEST_ALLOW_UNINSTANTIATED_PARAMETERIZED_TEST`

### Mocking
* `MOCK_METHOD`
* `MOCK_METHOD`
* `EXPECT_CALL`
* `ON_CALL`

### Assertions

#### Explicit Success and Failure
* `SUCCEED`
* `FAIL`
* `ADD_FAILURE`
* `ADD_FAILURE_AT`

#### Generalized Assertion
* `EXPECT_THAT` / `ASSERT_THAT`

#### Boolean Conditions
* `EXPECT_TRUE` / `ASSERT_TRUE`
* `EXPECT_FALSE` / `ASSERT_FALSE`

#### Binary Comparison
* `EXPECT_EQ` / `ASSERT_EQ`
* `EXPECT_NE` / `ASSERT_NE`
* `EXPECT_LT` / `ASSERT_LT`
* `EXPECT_LE` / `ASSERT_LE`
* `EXPECT_GT` / `ASSERT_GT`
* `EXPECT_GE` / `ASSERT_GE`

#### String Comparison
* `EXPECT_STREQ` / `ASSERT_STREQ`
* `EXPECT_STRNE` / `ASSERT_STRNE`
* `EXPECT_STRCASEEQ` / `ASSERT_STRCASEEQ`
* `EXPECT_STRCASENE` / `ASSERT_STRCASENE`

#### Floating-Point Comparison
* `EXPECT_FLOAT_EQ` / `ASSERT_FLOAT_EQ`
* `EXPECT_DOUBLE_EQ` / `ASSERT_DOUBLE_EQ`
* `EXPECT_NEAR` / `ASSERT_NEAR`

#### Exception Assertions
* `EXPECT_THROW` / `ASSERT_THROW`
* `EXPECT_ANY_THROW` / `ASSERT_ANY_THROW`
* `EXPECT_NO_THROW` / `ASSERT_NO_THROW`

#### Predicate Assertions
* `EXPECT_PRED1` / `EXPECT_PRED2` / `EXPECT_PRED3` / `EXPECT_PRED4` / `EXPECT_PRED5`
* `ASSERT_PRED1` / `ASSERT_PRED2` / `ASSERT_PRED3` / `ASSERT_PRED4` / `ASSERT_PRED5`
* `EXPECT_PRED_FORMAT1` / `EXPECT_PRED_FORMAT2` / `EXPECT_PRED_FORMAT3` / `EXPECT_PRED_FORMAT4` / `EXPECT_PRED_FORMAT5`
* `ASSERT_PRED_FORMAT1` / `ASSERT_PRED_FORMAT2` / `ASSERT_PRED_FORMAT3` / `ASSERT_PRED_FORMAT4` / `ASSERT_PRED_FORMAT5`

#### Windows HRESULT Assertions
* `EXPECT_HRESULT_SUCCEEDED` / `ASSERT_HRESULT_SUCCEEDED`
* `EXPECT_HRESULT_FAILED` / `ASSERT_HRESULT_FAILED`

#### Death Assertions
* `EXPECT_DEATH` / `ASSERT_DEATH`
* `EXPECT_DEATH_IF_SUPPORTED` / `ASSERT_DEATH_IF_SUPPORTED`
* `EXPECT_DEBUG_DEATH` / `ASSERT_DEBUG_DEATH`
* `EXPECT_EXIT` / `ASSERT_EXIT`

## Release Notes

### 1.0.1

- Added icon

### 1.0.0

- Initial release