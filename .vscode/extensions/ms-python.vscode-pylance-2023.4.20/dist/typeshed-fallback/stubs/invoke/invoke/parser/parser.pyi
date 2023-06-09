from typing import Any

from .context import ParserContext

def is_flag(value: str) -> bool: ...
def is_long_flag(value: str) -> bool: ...

class Parser:
    initial: Any
    contexts: Any
    ignore_unknown: Any
    def __init__(self, contexts=(), initial=None, ignore_unknown: bool = False) -> None: ...
    def parse_argv(self, argv): ...

class ParseMachine:
    initial_state: str
    def changing_state(self, from_, to) -> None: ...
    ignore_unknown: Any
    initial: Any
    flag: Any
    flag_got_value: bool
    result: Any
    contexts: Any
    def __init__(self, initial, contexts, ignore_unknown) -> None: ...
    @property
    def waiting_for_flag_value(self): ...
    def handle(self, token) -> None: ...
    def store_only(self, token) -> None: ...
    def complete_context(self) -> None: ...
    context: Any
    def switch_to_context(self, name) -> None: ...
    def complete_flag(self) -> None: ...
    def check_ambiguity(self, value): ...
    def switch_to_flag(self, flag, inverse: bool = False) -> None: ...
    def see_value(self, value) -> None: ...
    def see_positional_arg(self, value) -> None: ...
    def error(self, msg) -> None: ...

class ParseResult(list[ParserContext]):
    remainder: str
    unparsed: Any
    def __init__(self, *args, **kwargs) -> None: ...
