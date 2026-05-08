._card_1kw0t_1 {
    display: grid;
    width: 370px;
    gap: var(--space - small);
    padding: var(--space - large)
}

._modal_1nyk4_3 {
    position: fixed;
    z - index: var(--z - index - 2);
    display: flex;
    flex - direction: column;
    background - color: var(--figma - color - bg);
    transition - duration: .3s;
    transition - timing - function: ease
}

._noTransition_1nyk4_12 {
    transition: none
}

._center_1nyk4_16 {
    top: 50 %;
    left: 50 %;
    border - radius: var(--border - radius - modal, var(--border - radius - 2));
    box - shadow: var(--box - shadow - modal);
    opacity: 0;
    visibility: hidden;
    pointer - events: none;
    transform: translate(-50 %, -50 %);
    transition - property: opacity
}

._open_1nyk4_27._center_1nyk4_16 {
    opacity: 1;
    visibility: visible;
    pointer - events: all
}

._bottom_1nyk4_33 {
    top: 100 %;
    left: 0;
    width: 100 %
}

._open_1nyk4_27._bottom_1nyk4_33 {
    box - shadow: var(--box - shadow - modal);
    transform: translateY(-100 %)
}

._left_1nyk4_43 {
    top: 0;
    right: 100 %;
    height: 100 %
}

._open_1nyk4_27._left_1nyk4_43 {
    box - shadow: var(--box - shadow - modal);
    transform: translate(100 %)
}

._right_1nyk4_53 {
    top: 0;
    left: 100 %;
    height: 100 %
}

._open_1nyk4_27._right_1nyk4_53 {
    box - shadow: var(--box - shadow - modal);
    transform: translate(-100 %)
}

._topBar_1nyk4_63 {
    display: flex;
    min - height: 41px;
    align - items: center;
    order: -1;
    padding: 4px;
    border - color: var(--figma - color - border);
    border - bottom - width: 1px
}

._closeButtonLeft_1nyk4_73 {
    order: -1
}

._title_1nyk4_77 {
    flex - grow: 1;
    padding: 0 var(--space - extra - small)
}

._overlay_1nyk4_82 {
    position: fixed;
    z - index: var(--z - index - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit - backdrop - filter: blur(4px);
    backdrop - filter: blur(4px);
    opacity: 0;
    pointer - events: none;
    transition: opacity ease .3s
}

.figma - light._overlay_1nyk4_82 {
    background - color: #dcdcdc4d
}

.figma - dark._overlay_1nyk4_82 {
    background - color: #6464644d
}

._open_1nyk4_27~._overlay_1nyk4_82 {
    opacity: 1;
    pointer - events: all
}

._noTransition_1nyk4_12~._overlay_1nyk4_82 {
    transition: none
}

._modal_1gig7_3 {
    position: fixed;
    z - index: var(--z - index - 2);
    display: flex;
    flex - direction: column;
    background - color: var(--figma - color - bg);
    transition - duration: .3s;
    transition - timing - function: ease
}

._noTransition_1gig7_12 {
    transition: none
}

._cover_1gig7_16 {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    visibility: hidden;
    pointer - events: none;
    transition - property: opacity
}

._open_1gig7_22._cover_1gig7_16 {
    opacity: 1;
    visibility: visible;
    pointer - events: all
}

._center_1gig7_28 {
    top: 50 %;
    left: 50 %;
    border - radius: var(--border - radius - 2);
    box - shadow: var(--box - shadow - modal);
    opacity: 0;
    visibility: hidden;
    pointer - events: none;
    transform: translate(-50 %, -50 %);
    transition - property: opacity
}

._open_1gig7_22._center_1gig7_28 {
    opacity: 1;
    visibility: visible;
    pointer - events: all
}

._bottom_1gig7_45 {
    top: 100 %;
    left: 0;
    width: 100 %
}

._open_1gig7_22._bottom_1gig7_45 {
    box - shadow: var(--box - shadow - modal);
    transform: translateY(-100 %)
}

._left_1gig7_55 {
    top: 0;
    right: 100 %;
    height: 100 %
}

._open_1gig7_22._left_1gig7_55 {
    box - shadow: var(--box - shadow - modal);
    transform: translate(100 %)
}

._right_1gig7_65 {
    top: 0;
    left: 100 %;
    height: 100 %
}

._open_1gig7_22._right_1gig7_65 {
    box - shadow: var(--box - shadow - modal);
    transform: translate(-100 %)
}

._topBar_1gig7_75 {
    display: flex;
    min - height: 41px;
    align - items: center;
    padding: 4px;
    border - color: var(--figma - color - border);
    border - bottom - width: 1px
}

._closeButtonLeft_1gig7_84 {
    order: -1
}

._title_1gig7_88 {
    flex - grow: 1;
    padding: 0 var(--space - extra - small)
}

._overlay_1gig7_93 {
    position: fixed;
    z - index: var(--z - index - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit - backdrop - filter: blur(4px);
    backdrop - filter: blur(4px);
    opacity: 0;
    pointer - events: none;
    transition: opacity ease .3s
}

.figma - light._overlay_1gig7_93 {
    background - color: #dcdcdc4d
}

.figma - dark._overlay_1gig7_93 {
    background - color: #6464644d
}

._open_1gig7_22~._overlay_1gig7_93 {
    opacity: 1;
    pointer - events: all
}

._noTransition_1gig7_12~._overlay_1gig7_93 {
    transition: none
}

._small - badge - pro_8mmjx_1 {
    background - color: #feda66;
    color: #000;
    padding: 2px 6px;
    border - radius: 4px;
    line - height: 12px
}

._small - badge - brand_8mmjx_9 {
    background - color: var(--figma - color - bg - brand);
    color: #fff;
    padding: 2px 6px;
    border - radius: 4px;
    line - height: 12px
}

footer._warnings_8mmjx_17 {
    padding: var(--space - small);
    display: flex;
    justify - content: space - between;
    align - items: center
}

._drop_8mmjx_24 {
    background - color: var(--figma - color - bg - brand - tertiary)
}

._configuration - tooltip_1sjfc_1[data - balloon - pos]:after {
    width: 160px;
    white - space: normal
}

._configuration - tooltip_1sjfc_1 {
    display: flex;
    width: fit - content
}

._configuration - options_1sjfc_11 {
    padding: var(--space - medium)
}

._domain - list_1sjfc_15 {
    overflow - y: auto;
    list - style: none;
    padding: 6px;
    margin: 0;
    border - right: 1px solid var(--figma - color - border);
    flex - shrink: 0;
    width: 140px;
    max - width: 140px;
    gap: 1px
}

._domain - list_1sjfc_15 header {
    display: flex;
    align - items: center;
    justify - content: space - between
}

._domain - list_1sjfc_15 header >: first - child {
    opacity: .5;
    padding - left: 6px
}

._domain - list_1sjfc_15 li {
    display: flex;
    align - items: center;
    border - radius: 4px;
    text - overflow: ellipsis;
    overflow: hidden;
    white - space: nowrap;
    cursor: pointer
}

._domain - list_1sjfc_15 li >: first - child {
    padding: 6px;
    white - space: nowrap;
    text - overflow: ellipsis;
    overflow: hidden
}

._domain - list_1sjfc_15 li:hover {
    background - color: var(--figma - color - bg - hover)
}

._domain - list_1sjfc_15 li[selected] {
    color: var(--figma - color - text - onselected);
    background - color: var(--figma - color - bg - selected)
}

._domain - config_1sjfc_64 {
    flex - grow: 1;
    overflow - y: auto;
    --textbox - autocomplete - menu - width: 228px
}

._missing - fonts - table_p1zbl_1 {
    font - size: var(--font - size - 11);
    width: 100 %;
    table - layout: fixed;
    border - collapse: collapse
}

._missing - fonts - table_p1zbl_1 th {
    padding - bottom: .5em;
    text - align: left
}

._missing - fonts - table_p1zbl_1 td div {
    right: 0
}

._font - column_p1zbl_17 {
    overflow: hidden
}

._font - column - wrapper_p1zbl_21 {
    display: flex;
    align - items: center
}

._button - group_p1zbl_26 {
    display: flex;
    gap: .5rem;
    justify - content: flex - end;
    align - items: center
}

._menu_rafdl_1 {
    position: absolute;
    left: 0;
    min - width: 100 %;
    padding: var(--space - extra - small) 0;
    border - radius: 5px;
    background - color: #1e1e1e;
    box - shadow: var(--box - shadow - menu);
    color: #fff;
    font - size: var(--font - size - 12);
    overflow - y: auto
}

._menu_rafdl_1:: -webkit - scrollbar {
    display: none
}

._hidden_rafdl_17 {
    pointer - events: none;
    visibility: hidden
}

._displayNone_rafdl_22 {
    display: none
}

@media screen and(-webkit - min - device - pixel - ratio: 1.5), screen and(min - resolution: 1.5dppx) {
    ._menu_rafdl_1 {
        -webkit - font - smoothing: antialiased
    }
}

._optionHeader_rafdl_33,._optionValue_rafdl_34 {
    overflow: hidden;
    padding: 4px var(--space - extra - small) 4px 24px;
    text - overflow: ellipsis;
    white - space: nowrap
}

._optionHeader_rafdl_33 {
    color: #ffffffb3;
    font - size: var(--font - size - 12)
}

._optionValue_rafdl_34 {
    position: relative
}

._optionValueSelected_rafdl_49 {
    background - color: var(--figma - color - bg - brand)
}

._optionValueDisabled_rafdl_52 {
    color: #fff6
}

._optionSeparator_rafdl_56 {
    width: 100 %;
    height: 1px;
    margin: var(--space - extra - small) 0;
    background - color: #444
}

._input_rafdl_63 {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100 %;
    height: 100 %
}

._checkIcon_rafdl_74 {
    position: absolute;
    top: 5px;
    left: var(--space - extra - small)
}

._textbox_1x5td_1 {
    position: relative;
    z - index: var(--z - index - 1)
}

._textbox_1x5td_1: focus - within {
    z - index: var(--z - index - 2)
}

._input_1x5td_9 {
    display: block;
    width: 100 %;
    height: 28px;
    padding: 0 var(--space - extra - small);
    background - color: transparent;
    color: var(--figma - color - text)
}

._disabled_1x5td_17._input_1x5td_9 {
    color: var(--figma - color - text - disabled);
    cursor: not - allowed
}

._hasIcon_1x5td_21._input_1x5td_9 {
    padding - left: 24px
}

._input_1x5td_9::placeholder {
    color: var(--figma - color - text - tertiary)
}

._icon_1x5td_29 {
    position: absolute;
    top: 14px;
    left: 12px;
    color: var(--figma - color - icon - secondary);
    pointer - events: none;
    text - align: center;
    transform: translate(-50 %, -50 %)
}

._textbox_1x5td_1: not(._disabled_1x5td_17)._input_1x5td_9:focus~._icon_1x5td_29 {
    color: var(--figma - color - icon - brand)
}

._disabled_1x5td_17._icon_1x5td_29 {
    color: var(--figma - color - icon - disabled)
}

._icon_1x5td_29 svg {
    fill: currentColor
}

._border_1x5td_49 {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid transparent;
    border - radius: var(--border - radius - 2);
    pointer - events: none
}

._hasBorder_1x5td_59._border_1x5td_49,._textbox_1x5td_1: not(._disabled_1x5td_17): hover._border_1x5td_49 {
    border - color: var(--figma - color - border)
}

._textbox_1x5td_1: not(._disabled_1x5td_17)._input_1x5td_9:focus~._border_1x5td_49 {
    top: -1px;
    bottom: -1px;
    border - width: 2px;
    border - color: var(--figma - color - border - brand - strong)
}

._underline_1x5td_70 {
    position: absolute;
    right: var(--space - extra - small);
    bottom: 0;
    left: var(--space - extra - small);
    height: 1px;
    background - color: var(--figma - color - border)
}

._textbox_1x5td_1: not(._disabled_1x5td_17)._input_1x5td_9:focus~._underline_1x5td_70,._textbox_1x5td_1: not(._disabled_1x5td_17): hover._underline_1x5td_70 {
    background - color: transparent
}

._top_nbl9q_1 {
    bottom: calc(100 % + 1px)
}

._bottom_nbl9q_5 {
    top: calc(100 % + 1px)
}

._fitContentOverflowLeft_nbl9q_9 {
    width: var(--textbox - autocomplete - menu - width, fit - content);
    left: unset;
    right: 0
}

._fitContentOverflowRight_nbl9q_15 {
    width: var(--textbox - autocomplete - menu - width, fit - content);
    left: 0
}

._iconButton_nd2dl_1 {
    position: relative;
    border: 2px solid transparent;
    border - radius: var(--border - radius - 2);
    display: flex;
    align - items: center;
    justify - content: center;
    cursor: pointer
}

._iconButton_nd2dl_1: not(: disabled) {
    color: var(--figma - color - icon)
}

._iconButton_nd2dl_1: not(: disabled):hover {
    background - color: var(--figma - color - bg - hover)
}

._iconButton_nd2dl_1: not(: disabled):focus {
    border - color: var(--figma - color - border - brand - strong)
}

._iconButton_nd2dl_1:disabled {
    color: var(--figma - color - icon - disabled);
    cursor: not - allowed
}

._icon_nd2dl_1 {
    position: absolute;
    top: 50 %;
    left: 50 %;
    pointer - events: none;
    transform: translate(-50 %, -50 %)
}

._loading_nd2dl_33 > div {
    transform: scale(.8)
}

._container_zbvyo_1 {
    display: flex;
    overflow: hidden;
    height: 100 %
}

._container_zbvyo_1._horizontal_zbvyo_7 {
    flex - direction: column
}

._container_zbvyo_1._tabs_zbvyo_11 {
    position: relative;
    z - index: var(--z - index - 1);
    display: flex;
    flex: none;
    padding: var(--space - extra - small)
}

._container_zbvyo_1._horizontal_zbvyo_7._tabs_zbvyo_11 {
    align - items: center;
    width: 100 %;
    overflow - x: auto;
    border - bottom: 1px solid var(--figma - color - border);
    gap: 5px
}

._container_zbvyo_1._vertical_zbvyo_27._tabs_zbvyo_11 {
    flex - direction: column;
    align - items: flex - start;
    gap: 1px;
    border: none;
    border - right: 1px solid var(--figma - color - border);
    --default -sidebar - size: 140px;
    min - width: var(--sidebar - size, var(--default -sidebar - size));
    width: var(--sidebar - size, var(--default -sidebar - size));
    max - width: var(--sidebar - size, var(--default -sidebar - size));
    height: 100 %;
    overflow - y: auto
}

._tabsContent_zbvyo_41 {
    flex - grow: 1;
    overflow: auto;
    scrollbar - width: thin
}

._label_zbvyo_47 {
    padding: 4px 8px;
    color: var(--figma - color - text - secondary);
    border - radius: 5px
}

._container_zbvyo_1._vertical_zbvyo_27._tabs_zbvyo_11._label_zbvyo_47 {
    width: 100 %
}

._label_zbvyo_47: hover,._label_zbvyo_47: has(._input_zbvyo_58: checked~._value_zbvyo_58) {
    background - color: var(--figma - color - bg - secondary)
}

._group_zbvyo_62 {
    padding: 4px 8px 2px
}

._group_zbvyo_62: first - child {
    padding: 0 8px 2px
}

._input_zbvyo_58 {
    display: block;
    width: 0;
    height: 0
}

._input_zbvyo_58:checked~._value_zbvyo_58 {
    color: var(--figma - color - text);
    font - weight: var(--font - weight - bold)
}

._children_zbvyo_81 {
    color: var(--figma - color - text);
    height: 100 %
}

._tab_gofmp_1 {
    height: 100 %;
    display: flex;
    flex - direction: column
}

._html_footer_gofmp_7 {
    width: 100 %;
    display: flex;
    align - items: center;
    gap: 1rem;
    border - top: 1px solid var(--figma - color - border);
    padding: 1rem
}

._code_block_gofmp_16 {
    display: flex
}

._code_block_gofmp_16 >: nth - child(2) {
    flex: 1
}

._code_block_gofmp_16 label {
    padding: 4px 0;
    color: #fff;
    font - weight: 700;
    writing - mode: vertical - rl;
    text - orientation: sideways;
    transform: rotate(180deg)
}

._settings - summary_i4qs1_1 {
    display: flex;
    align - items: center;
    width: 100 %;
    border: 1px solid var(--figma - color - border);
    border - radius: 5px;
    cursor: pointer
}

._settings - summary_i4qs1_1 * {
    cursor: pointer
}

    ._settings - summary - table_i4qs1_14 {
    flex - grow: 1;
    align - items: center;
    padding: .5rem .7rem;
    display: grid;
    grid - template - columns: auto 1fr;
    grid - template - rows: 1fr;
    gap: .25rem
}

._settings - summary - data_i4qs1_24,._settings - summary - data - list_i4qs1_25 {
    display: inline - flex;
    align - items: center;
    gap: 4px
}

._settings - summary - data - list_i4qs1_25 {
    white - space: nowrap;
    overflow: hidden
}

._settings - summary - data - list_i4qs1_25 span {
    text - overflow: ellipsis;
    overflow: hidden
}

._settings - summary - header_i4qs1_41 {
    opacity: .7;
    font - size: smaller;
    display: inline - flex;
    align - items: center;
    gap: 4px
}

._basic - settings_4q8tx_1 {
    display: flex;
    gap: var(--space - small)
}

._advanced - settings_4q8tx_6 {
    display: flex;
    gap: var(--space - small);
    --fieldset - padding: var(--space - extra - small) 58px var(--space - extra - small) var(--space - medium);
    margin - bottom: 1em
}

._advanced - settings_4q8tx_6 legend {
    margin: -4px;
    padding: 0 4px
}

._advanced - settings_4q8tx_6 fieldset {
    padding: var(--fieldset - padding);
    border - width: 1px;
    border - color: var(--figma - color - border - disabled);
    border - radius: 5px;
    margin: calc(-1 * var(--space - extra - small)) 0 0
}

._advanced - settings_4q8tx_6 fieldset:disabled {
    pointer - events: none;
    opacity: .4
}

._tab_2gr1g_1 {
    height: 100 %;
    display: flex;
    flex - direction: column
}

._divider_2gr1g_7 {
    border - top: 1px solid var(--figma - color - border);
    position: relative;
    width: 100 %
}

._divider_2gr1g_7:before {
    content: "or";
    position: absolute;
    color: var(--figma - color - text - disabled);
    top: -8px;
    background: var(--figma - color - bg);
    padding: 0 4px;
    left: calc(50 % - 16px)
}

._advanced - toggle_1o42p_1 {
    height: 26px;
    color: var(--figma - color - text - brand);
    cursor: pointer;
    display: flex;
    align - items: center
}

._advanced - toggle_1o42p_1:hover {
    text - decoration: underline
}

._textarea_1o42p_13 {
    font - size: 130 %;
    resize: none;
    border: 1px solid var(--figma - color - border);
    border - radius: 5px;
    padding: 7px;
    white - space: nowrap;
    width: 100 %;
    scrollbar - width: none!important
}

._textarea_1o42p_13:: -webkit - scrollbar {
    display: none!important
}

._pro - only - banner_1o42p_28 {
    color: #000;
    background - color: #feda66;
    padding: var(--space - medium)
}

._pro - only - banner_1o42p_28 section {
    display: flex;
    justify - content: space - between;
    align - items: center
}

._pro - only - banner_1o42p_28 h2 {
    font - size: var(--font - size - 1);
    font - weight: 600
}

._press - enter - group_1o42p_45 {
    position: relative
}

._press - enter - label_1o42p_49 {
    color: var(--figma - color - text - disabled);
    position: absolute;
    top: -14px;
    right: 0;
    visibility: hidden
}

._press - enter - group_1o42p_45: focus - within._press - enter - label_1o42p_49 {
    visibility: visible
}

._tab_1vcwt_1 {
    height: 100 %;
    display: flex;
    flex - direction: column;
    gap: var(--space - medium);
    padding: var(--space - medium)
}

._tab_1vcwt_1 blockquote {
    margin: 0;
    padding: .7rem 1rem;
    background - color: var(--figma - color - bg - secondary);
    border - radius: 5px
}

._tab_9jfzv_1 {
    height: 100 %;
    display: flex;
    flex - direction: column
}

._no_captures_9jfzv_7 {
    margin - top: var(--space - small);
    margin - left: var(--space - medium);
    margin - right: var(--space - medium);
    opacity: .6
}

._card_extension_install_9jfzv_14 {
    display: flex;
    flex - direction: column;
    border: 1px solid var(--figma - color - border);
    border - radius: 1rem;
    padding: var(--space - medium);
    margin: var(--space - medium);
    margin - top: var(--space - small);
    align - content: center
}

._card_extension_install_9jfzv_14 h2 {
    line - height: 1.2rem
}

._card_extension_install_9jfzv_14 p {
    margin - top: 0;
    margin - bottom: var(--space - small)
}

._card_9jfzv_14 {
    position: relative;
    z - index: 0;
    display: flex;
    flex - direction: row;
    gap: .5rem;
    border - color: var(--figma - color - border);
    border - bottom - width: 1px;
    align - items: center;
    padding: 0 4px 0 0;
    height: 73px
}

._thumbnail_9jfzv_47 {
    width: 128px;
    height: 72px;
    aspect - ratio: 16 / 9;
    background - color: var(--figma - color - bg - secondary);
    object - fit: contain;
    object - position: 50 % 50 %;
    cursor: grab
}

._ellipsis_9jfzv_57 {
    display: inline - block;
    max - width: 100 %;
    white - space: nowrap;
    overflow: hidden;
    text - overflow: ellipsis
}

._date_9jfzv_65 {
    opacity: .7;
    font - size: smaller
}

._details_9jfzv_70 {
    height: 100 %;
    min - width: 0;
    display: flex;
    flex - direction: column;
    width: 100 %
}

._details - middle_9jfzv_78 {
    display: flex;
    flex - grow: 1;
    justify - content: space - between;
    font - size: 90 %
}

._selectionIcon_9jfzv_85 {
    font - size: smaller;
    display: flex;
    gap: 2px;
    align - items: center
}

._selectionIcon_9jfzv_85 svg {
    opacity: .7
}

._options_9jfzv_96 {
    display: flex;
    position: sticky;
    justify - content: space - between;
    align - items: center;
    top: 0;
    z - index: 1;
    padding: 2px;
    min - height: 37px;
    background - color: var(--figma - color - bg);
    border - bottom: 1px solid var(--figma - color - border);
    overflow - x: hidden
}

._empty_9jfzv_110 {
    flex - grow: 1;
    background - color: var(--figma - color - bg - secondary)
}

._cardSelected_9jfzv_115 {
    background - color: var(--figma - color - bg - selected)!important
}

._cardSelectable_9jfzv_119 {
    cursor: pointer
}

._cardSelectable_9jfzv_119:hover {
    background - color: var(--figma - color - bg - hover)
}

._cardSelectable_9jfzv_119._thumbnail_9jfzv_47 {
    cursor: pointer
}

._checkbox_9jfzv_131 {
    width: 18px;
    height: 18px;
    border - radius: 50 %;
    border: 1.5px solid var(--figma - color - icon - tertiary);
    display: flex;
    align - items: center;
    justify - content: center;
    flex - shrink: 0;
    align - self: flex - end;
    margin - bottom: 4px;
    transition: background - color .1s ease, border - color .1s ease
}

._checkboxChecked_9jfzv_147 {
    background - color: var(--figma - color - bg - brand);
    border - color: var(--figma - color - bg - brand)
}

._toolbarAction_9jfzv_152 {
    -webkit - appearance: none;
    -moz - appearance: none;
    appearance: none;
    border: none;
    background: none;
    font: inherit;
    cursor: pointer;
    color: var(--figma - color - text);
    font - size: var(--font - size - 11);
    padding: var(--space - extra - small) var(--space - small);
    -webkit - user - select: none;
    user - select: none;
    white - space: nowrap;
    display: inline - flex;
    align - items: center;
    gap: var(--space - extra - small);
    border - radius: var(--border - radius - 6)
}

._toolbarAction_9jfzv_152:hover {
    background - color: var(--figma - color - bg - hover)
}

._toolbarActionBrand_9jfzv_173 {
    color: var(--figma - color - text - brand)
}

._toolbarActionDanger_9jfzv_177 {
    color: var(--figma - color - text - danger)
}

._toolbarAction_9jfzv_152:disabled {
    opacity: .3;
    cursor: default ;
    pointer - events: none
}

._selectActions_9jfzv_187,._selectInfo_9jfzv_192 {
    display: flex;
    align - items: center
}

._tab_e6ibk_1 {
    display: flex;
    height: 100 %;
    flex - direction: column;
    padding: var(--space - medium)
}

._onboarding_e6ibk_8 {
    background - color: #fff;
    color: #000;
    padding: var(--space - medium);
    border: 1px solid var(--figma - color - border);
    border - radius: .5rem
}

._onboarding_e6ibk_8 img {
    width: 100 %;
    margin - top: var(--space - medium);
    margin - bottom: var(--space - small)
}

._onboarding_e6ibk_8 p {
    margin: 0
}

._onboarding_e6ibk_8 a {
    color: #000;
    text - decoration: underline
}

._onboarding_e6ibk_8 ul {
    padding - left: var(--space - medium)
}

._link_e6ibk_35 {
    display: inline - flex;
    align - items: center;
    gap: 4px;
    cursor: pointer
}

._logs_e6ibk_42 {
    overflow: auto;
    padding: var(--space - small);
    background - color: #000;
    color: #fff;
    font - family: monospace;
    border - radius: 5px;
    resize: none;
    white - space: pre
}

._selectable_e6ibk_53 {
    padding: 6px;
    border: 1px solid #ccc;
    border - radius: 4px;
    overflow: auto
}

._status_light_container_e6ibk_60 {
    display: flex;
    align - items: center;
    gap: 4px;
    background: var(--figma - color - bg - secondary);
    border - radius: var(--border - radius - 6);
    padding: var(--space - extra - small)
}

._status_light_e6ibk_60 {
    width: var(--space - small);
    height: var(--space - small);
    box - shadow: var(--box - shadow);
    border - radius: 50 %
}

._tab_xjc7m_1 {
    height: 100 %;
    display: flex;
    gap: var(--space - medium);
    padding: var(--space - medium);
    align - items: center;
    justify - content: center
}

._onboarding_xjc7m_10 {
    background - color: #000;
    color: #fff;
    padding: 2rem;
    border: 1px solid var(--figma - color - border);
    border - radius: .5rem
}

._onboarding_xjc7m_10 p {
    margin: 0
}

._panel_1lcnb_1 {
    --panel - height: 112px;
    position: absolute;
    top: calc(var(--panel - height) * -1);
    left: 8px;
    right: 8px;
    height: var(--panel - height);
    box - shadow: #00000029 0 3px 6px,#0000003b 0 3px 6px;
    z - index: 999;
    display: none;
    background: var(--figma - color - bg);
    border - radius: 0 0 5px 5px
}

._panel_1lcnb_1._annoucement_1lcnb_19 {
    padding: .75rem
}

._panel_1lcnb_1._buttons_1lcnb_23 {
    display: flex;
    flex - direction: column;
    justify - content: space - between;
    align - items: flex - end;
    padding - bottom: .75rem
}
